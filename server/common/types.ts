import { Request } from "express";

export interface IUserRequest extends Request {
    firstName: string;
    lastName: string;
    birthday: Date;
    username: string;
    email: string;
    password: string;
}