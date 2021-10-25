import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import environment from './environment.constants';
import { User } from 'components/user/models/user.model';
import { Role } from 'components/auth/models/role.model';
import { UserRole } from 'components/auth/models/user-role.model';
/**
 * docstring about sequelize-typescript:
 * https://www.npmjs.com/package/sequelize-typescript
 *
 * sample:
 * https://github.com/RobinBuschmann/sequelize-typescript-example
 */
export default (): Sequelize => {
  const sequelize: Sequelize = new Sequelize({
    dialect: environment.db_type as Dialect,
    host: environment.db_host,
    port: environment.db_port,
    database: environment.db_database,
    username: environment.db_username,
    password: environment.db_password,
    // query: { raw: true },
    logging: false,
    timezone: '+07:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 5000,
    },
    models: [User, Role, UserRole],
  });
  return sequelize;
};
