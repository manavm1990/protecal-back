import express from 'express';
import config from './config';
import router from './routes';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.listen(config.port, () => {
  console.info('Server is listening on port', config.port);
});
