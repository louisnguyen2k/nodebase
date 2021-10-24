require('./register-module-alias');
import environment from './configs/environment';
import { logger } from './shared/logs/logger';
import { createApp } from './app';
import startSetup from '../setup';

async function bootstrap() {
  const PORT = environment.port;
  const app = await createApp();
  app.listen(PORT, () => logger.info({ message: `Server successfully started at: ${PORT}` }));
  startSetup();
}
bootstrap();
