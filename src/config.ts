import dotenv from 'dotenv';

dotenv.config();

type configType = {
  db: {
    apiKey: string;
    apiUrl: string;
    dataSource: 'Cluster0';
    database: 'protecal';
  };
  encryption: {
    expiration: string;
    saltRounds: string | number;
    secret: string;
  };
  port: string | number;
};

const config: configType = {
  db: {
    apiKey: process.env.API_KEY!,
    apiUrl: process.env.API_URL!,
    dataSource: 'Cluster0',
    database: 'protecal',
  },
  encryption: {
    expiration: process.env.EXPIRATION || '1h',
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET!,
  },

  // If coming from .env file, this value is a string
  port: process.env.PORT || 3000,
};

export default config;
