import express from 'express';
import config from './config';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(config.port, () => {
  console.info('Server is listening on port', config.port);
});
