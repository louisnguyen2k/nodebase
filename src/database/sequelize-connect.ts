import database from '../configs/sequelize-config';
import { logger } from '../shared/logs/logger';

export default (): Promise<void> => {
  return database()
    .authenticate()
    .then(() => {
      logger.info({ message: `Connection has been established successfully.` });
    })
    .catch((err) => {
      logger.error({
        message: `Unable to connect to the database: ${JSON.stringify(err)}`,
      });
    });
};
