import express from 'express';
import config from './config';
import router from './routes';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', router);

app.listen(config.port, () => {
  console.info(`Server is 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
