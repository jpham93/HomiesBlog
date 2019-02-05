import { getConnection } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { User } from '../models';
import { Response, Request, NextFunction } from 'express';
import { isEmpty } from 'lodash';
import { BAD_REQUEST } from 'http-status-codes';
import { BaseController } from './base';
import { resolve } from 'path';

export class UserController extends BaseController {

    public whoIs = async (req: Request, res: Response, next: NextFunction) => {
        let user = await this.db.user.findOne("9069aef4-bb8f-4fac-a984-c3eef8dc147b");
        res.json(user);
    }

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
        let emailLookup = await this.db.user.findOne({ email: user.email })
        if (emailLookup) {
            return res.status(400).json({ msg: "user already exists" })
        }
        user.password = await this._hashPassword(user.password);
        await this.db.user.save(user)
        res.json(user);
    }

    public login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        try {
            let user = await this.db.user.findOne({ username })
            console.log(user);
            let matching = await bcrypt.compare(password, user.password)
            console.log(matching);
            if (matching) {
                const payload: object = {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    birthday: user.birthday,
                    email: user.email
                };
                let token = await jwt.sign(payload, 'secret', {
                    expiresIn: 3600
                });
                res.json({
                    success: true,
                    token: `Bearer ${token}`
                });
            }
        } catch (err) {
            console.error(`${err}`);
            res.status(404).json({ errors: "whoa" });
        }

    }

    private _hashPassword = async (password: string) => {
        const SALT_ROUNDS: number = 10;
        try {
            const salt = await bcrypt.genSalt(SALT_ROUNDS);
            const hashWord = await bcrypt.hash(password, salt);
            console.log(hashWord);
            return hashWord
        } catch (err) {
            console.error(`${err}`);
        }
    }
}