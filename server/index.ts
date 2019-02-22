import * as express from 'express';
const { PORT } = require('./server-port');

const app = express();

app
  .get('/', (req: any, res: any) =>
    res.send(`Node and express server is running on port ${PORT}`),
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
