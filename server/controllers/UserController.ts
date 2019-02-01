import { getConnection } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { User } from '../models';
import { Response, Request, NextFunction } from 'express';
import { isEmpty } from 'lodash';
import { BAD_REQUEST } from 'http-status-codes';
import { BaseController } from './base';

export class UserController extends BaseController {
    public userRepo = getConnection().getRepository(User);

    public whoIs = async (req: Request, res: Response, next: NextFunction) => {
        let user = await this.db.user.findOne("9069aef4-bb8f-4fac-a984-c3eef8dc147b");
        res.json(user);
    }

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        const { firstName, lastName, birthday, username, email, password } = req.body;
        let user = {
            firstName,
            lastName,
            birthday,
            username,
            email,
            password
        };
        await this.userRepo.save(user)
    }

    public login = async (req: Request, res: Response, next: NextFunction) => {

    }
}
