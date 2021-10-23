import { Sequelize } from 'sequelize';
import environment from './environment';

export default (): Sequelize => {
  const sequelize: Sequelize = new Sequelize(
    environment.db_database,
    environment.db_username,
    environment.db_password,
    {
      host: environment.db_host,
      dialect: 'mysql',
      logging: false,
      port: environment.db_port,
      // query: { raw: true },
      timezone: '+07:00',
      pool: {
        max: 30,
        min: 0,
        acquire: 60000,
        idle: 5000,
      },
    },
  );
  return sequelize;
};
