import './register-module-alias';
import 'reflect-metadata';
import environment from './configs/environment.constants';
import { logger } from './shared/services/logger/logger';
import { createApp } from './app';
import connect from './database/sequelize-connect';
import sync from './database/sequelize-sync';

async function bootstrap() {
  console.log('environment', environment);
  const PORT = environment.port;
  const app = await createApp();
  app.listen(PORT, () => logger.info({ message: `Server successfully started at: ${PORT}` }));
  // database connection
  await connect();
  // sync db
  // sync();
  // register module
}
bootstrap();
