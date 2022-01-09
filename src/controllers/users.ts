import got from 'got';
import config from '../config';
import User from '../models/User';

const headers = { 'api-key': config.db.apiKey };
const payloadBase = {
  collection: 'users',
  dataSource: config.db.dataSource,
  database: config.db.database,
};

export default {
  async create(newUser: User) {
    const { document } = await got
      .post(`${config.db.apiUrl}/findOne`, {
        headers,
        json: {
          ...payloadBase,
          filter: {
            username: newUser.username,
          },
        },
      })
      .json();

    if (document) {
      throw new Error('User already exists');
    }

    return got
      .post(`${config.db.apiUrl}/insertOne`, {
        headers,
        json: {
          ...payloadBase,
          document: newUser,
        },
      })
      .json();
  },
};
