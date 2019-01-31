import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./models/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Dominic";
    user.lastName = "Phan";
    user.birthday = new Date("1993-07-14");
    user.username = "dvp137";
    user.email = "dvp137@yahoo.com";
    user.password = "poopoo1";
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
