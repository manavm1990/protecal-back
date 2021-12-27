import dotenv from 'dotenv';

dotenv.config();

type configType = {
  apiKey: string;
  port: string | number;
};

const config: configType = {
  // ⚠️ Must guarantee this value is set in .env file
  apiKey: process.env.API_KEY!,

  // If coming from .env file, this value is a string
  port: process.env.PORT || 3000,
};

export default config;
