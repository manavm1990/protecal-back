import dotenv from 'dotenv';

dotenv.config();

type configType = {
  db: {
    apiKey: string;
    apiUrl: string;
    dataSource: 'Cluster0';
    database: 'protecal';
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
  // If coming from .env file, this value is a string
  port: process.env.PORT || 3000,
};

export default config;
