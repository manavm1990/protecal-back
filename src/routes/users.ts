import { Router } from 'express';
import userController from '../controllers/users';
import User from '../models/User';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello World!');
});

router.post('/', async ({ body }, res) => {
  const newUser = new User(body);
  const errors = newUser.validate();

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    try {
      const resp = await userController.create(newUser);
      res.status(201).json(resp);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send(err.message);
      } else {
        res.status(500).send(err);
      }
    }
  }
});

export default router;
