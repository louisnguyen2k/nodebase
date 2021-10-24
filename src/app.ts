import express from 'express';
import { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import connect from './database/sequelize-connect';
import morgan from 'morgan';
import cors from 'cors';
import initRoutes from './routes';
import { handleLanguage } from './middlewares/language.middleware';
import { trimRequestAll } from './middlewares/trim-request.middleware';

export async function createApp(): Promise<Express> {
  const app: Express = express();

  app.use(cors());
  app.use(cors({ optionsSuccessStatus: 200 }));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('combined'));
  app.use(express.static('public'));
  app.use('/uploads', express.static('uploads'));
  app.use(handleLanguage);
  app.use(trimRequestAll);
  initRoutes(app);

  // database connection
  await connect();

  return app;
}
