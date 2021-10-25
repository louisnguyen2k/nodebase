require('dotenv').config();
export default {
  app_name: process.env.APP_NAME,
  app_env: process.env.APP_ENV,
  app_secret: process.env.APP_SECRET,
  jwt_tll: process.env.JWT_TTL,
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  db_type: process.env.DB_TYPE,
  db_host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
  db_port: parseInt(process.env.MYSQL_DB_PORT),
};
