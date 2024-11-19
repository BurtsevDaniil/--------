import dotenv from 'dotenv';

dotenv.config();

export const DB_HOST = String(process.env.DB_HOST) as string;
export const DB_PORT = Number(process.env.DB_PORT) as number;
export const DB_PASS = String(process.env.DB_PASS) as string;
export const DB_USER = String(process.env.DB_USER) as string;
export const DB_NAME = String(process.env.DB_NAME) as string;
export const DB_SCHEMA = String(process.env.DB_SCHEMA) as string;
