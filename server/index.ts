import * as express from 'express';
import { userRoutes } from './routes/user-route';
const { PORT } = require('./server-port');
import * as bodyParser from 'body-parser';

const app = express();

// required to allow other port number to make http calls
app.use((req: any, res: any, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// body parser will help to read the body from request message and put it in express request body object.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

userRoutes(app);

app
  .get('/', (req: any, res: any) =>
    res.send(`Node and express server is running on port ${PORT}`)
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
