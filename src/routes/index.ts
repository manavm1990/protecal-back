import { Router } from 'express';
import usersRouter from './users';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello World!');
});

router.use('/users', usersRouter);

export default router;
