import { User, Post, Comment } from '../models';
import { createConnection } from 'typeorm';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Dominic";
    user.lastName = "Phan";
    user.birthday = new Date("1993-07-14");
    user.username = "dvp137";
    user.email = "dvp137@yahoo.com";
    user.password = "poopoo1";
    let userRepository = connection.getRepository(User);
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    let users = await userRepository.find();
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));