import * as express from 'express';
import { userRoutes } from './routes/user-route';
const { PORT } = require('./server-port');

const app = express();
userRoutes(app);
app
  .get('/', (req: any, res: any) =>
    res.send(`Node and express server is running on port ${PORT}`)
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
