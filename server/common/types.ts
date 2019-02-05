import { Request } from "express";

export interface UserInterface {
    firstName: string;
    lastName: string;
    birthday: Date;
    username: string;
    email: string;
    password: string;
}