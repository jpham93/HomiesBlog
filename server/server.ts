import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';

const app = express();
const port = process.env.PORT || '3001';

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api/users', usersRoute);

app.use((req, res) => {
  res.status(404);
  res.send('error 404');
});

app.use((err, req, res, next) => {
  res.status(500);
  console.log(`ERROR: ${err}`);
  res.send(`ERROR 500: ${err}`);
});

app.listen(port, () => {
  console.log(`Express server started on ${port}`);
});
