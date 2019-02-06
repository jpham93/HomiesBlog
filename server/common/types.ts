import { Request } from "express";

export interface UserRequestInterface extends Request {
    id: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    username: string;
    email: string;
    password: string;
}