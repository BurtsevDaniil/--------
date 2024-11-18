import fastify from 'fastify';
import cors from '@fastify/cors'
import { SequelizeConnection } from './services/SequelizeConnection';
import { setupAppRoutes } from './routes/app.routes';

export const app = fastify();
const PORT = 8080;

await app.register(cors, {
    origin: '*',
});

SequelizeConnection.getInstance();

setupAppRoutes(app);

app.listen({port: PORT});

await app.ready();