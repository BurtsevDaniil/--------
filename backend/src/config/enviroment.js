import dotenv from 'dotenv'

dotenv.config()

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const SRV1_ADDR = process.env.SRV1_ADDR;
export const SRV2_ADDR = process.env.SRV2_ADDR;
export const SRV1_SCHEME = process.env.SRV1_SCHEME;
export const SRV2_SCHEME = process.env.SRV2_SCHEME;
