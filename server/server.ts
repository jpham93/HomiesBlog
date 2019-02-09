import * as passport from 'passport';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as HttpStatus from 'http-status-codes';
import * as validator from 'express-validator';
import { createConnection } from 'typeorm';
import "reflect-metadata";
const app = express();
const port = process.env.PORT || '3001';


app.use(validator());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createConnection().then(async connection => {
  console.log('connected to postgres');
  // TODO: ES6 imports
  require('./common/passport')(passport);

  app.use('/api/users', require('./routes/users').default);
  app.use('/api/posts', require('./routes/posts').default);
  /*
  Error handler
  */
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err.name === "UnauthorizedError" || err === "unauthorized") {
      return res.status(HttpStatus.UNAUTHORIZED).send(`invalid token`);
    }
    if (err.name === 'bad request') {
      return res.status(HttpStatus.BAD_REQUEST).send(`invalid route`);
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`Oops something went wrong`)
  });
})
  .catch(error => console.log(`CANNOT CONNECT TO DB... ERROR: ${error}`));


app.listen(port, () => {
  console.log(`Express server started on ${port}`);
});
