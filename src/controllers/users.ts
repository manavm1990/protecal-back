import got from 'got';
import config from '../config';
import User from '../models/User';

type UserDocument = {
  document: User | null;
};

const headers = { 'api-key': config.db.apiKey };
const payloadBase = {
  collection: 'users',
  dataSource: config.db.dataSource,
  database: config.db.database,
};

const getExistingUser = (username: string): Promise<UserDocument> =>
  got
    .post(`${config.db.apiUrl}/findOne`, {
      headers,
      json: {
        ...payloadBase,
        filter: {
          username,
        },
      },
    })
    .json();

export default {
  async create(newUser: User) {
    const { document: existingUser } = await getExistingUser(newUser.username);

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Don't bother with this until it's confirmed that the user is not in the database
    const document = { ...newUser, password: await newUser.encryptPassword() };

    return got
      .post(`${config.db.apiUrl}/insertOne`, {
        headers,
        json: {
          ...payloadBase,
          document,
        },
      })
      .json();
  },
};
