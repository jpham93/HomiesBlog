import { getConnection } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import { isEmpty } from 'lodash';
import { BAD_REQUEST, EXPECTATION_FAILED, UNAUTHORIZED, ACCEPTED } from 'http-status-codes';
import { BaseController } from './base';
import { resolve } from 'path';
import { UserRequestInterface } from '../common/types';

export class UserController extends BaseController {

    public whoIs = async (req: UserRequestInterface, res: Response, next: NextFunction) => {
        await console.log(req.user);
        let user = await this.db.user.findOne(req.user[0].id);
        res.json(user);
    }

    /*
    Body Data: { firstName, lastName, birthday, email, password }
    Signs a user up for a new account.
     */
    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        const { firstName, lastName, birthday, username, email, password } = req.body;
        let user: any = {
            firstName,
            lastName,
            birthday,
            username,
            email,
            password
        };
        // Check if email exists already
        let emailLookup = await this.db.user.findOne({ email: user.email })
        if (emailLookup) {
            return res.status(400).json({ msg: "user already exists" })
        }
        // hash password then store new user
        user.password = await this._hashPassword(user.password);
        await this.db.user.save(user)
        res.json(user);
    }

    /*
    Body Data: { username, password }
    Logs the user in by returning a JWT to be used with future requests
    */
    public login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        try {
            let user = await this.db.user.findOne({ username });
            let matching = await bcrypt.compare(password, user.password);
            if (matching) {
                const payload: object = {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    birthday: user.birthday,
                    email: user.email
                };
                let token: string = await jwt.sign(payload, 'secretsecret', {
                    expiresIn: 3600
                });
                res.json({
                    success: true,
                    token: `Bearer ${token}`
                });
            }
            res.status(EXPECTATION_FAILED).json({ error: 'invalid credentials' })
        } catch (err) {
            console.error(`${err}`);
            //TODO: Better error handling
            res.status(BAD_REQUEST).json({ errors: "whoa" });
        }

    }


    public changePassword = async (req: Request, res: Response, next: NextFunction) => {
        const { oldPassword, newPassword } = req.body;
        const { id } = req.user[0];
        // Check if oldPassword matches
        try {
            let user = await this.db.user.findOne({ id });
            let matching = await bcrypt.compare(oldPassword, user.password);
            if (!matching) {
                // If it doesn't, send back error
                res.status(EXPECTATION_FAILED).json({ error: 'old password not valid' })
            }
            // Save new password in DB
            await this.db.user.update(id, { password: await this._hashPassword(newPassword) });
            res.status(ACCEPTED).json(user)
        } catch (err) {
            res.status(UNAUTHORIZED).json({ error: 'invalid auth' });
        }
    }

    // TODO: JAMES
    public changeBirthday = async (newBirthday: Date) => {

    }

    private _hashPassword = async (password: string): Promise<string> => {
        const SALT_ROUNDS: number = 10;
        try {
            const salt: string = await bcrypt.genSalt(SALT_ROUNDS);
            const hashWord: string = await bcrypt.hash(password, salt);
            return hashWord
        } catch (err) {
            // TODO: Better error handling
            console.error(`${err}`);
        }
    }
}