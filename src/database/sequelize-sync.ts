import database from '../configs/sequelize.config';
import { logger } from '../shared/logger/logger';

export default (): void => {
  database()
    .sync({ force: false, alter: true, logging: console.log })
    .then((res) => {
      logger.info({ message: `Sequelize sync result: ${res}` });
    })
    .catch((error: Error) => {
      logger.error({ message: `Sequelize sync error: ${error}` });
    });
};
