import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_SCHEMA,
  DB_USER,
} from '../../config/enviroment';
import { DataSource } from 'typeorm';

const ds = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_NAME,
  schema: DB_SCHEMA,
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
  logging: 'all',
  entities: ['src/models/**/entities/*.ts'],
});

ds.initialize();
export default ds;
