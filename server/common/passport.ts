import * as passportJWT from 'passport-jwt';
import { getConnection } from 'typeorm';
import { User } from '../models';

const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const options: any = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';

let user = getConnection().getRepository(User);

export default (passport) => {
    passport.use(new JWTStrategy(options, async (jwtPayload, done) => {
        try {
            let foundUser = await user.findByIds(jwtPayload.id)
            if (foundUser) {
                return done(null, foundUser);
            }
            return done(null, false);
        } catch (err) {
            console.error(err);
        }
    }));
};
