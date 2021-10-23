import express, { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import connect from './database/sequelize-connect';
import morgan from 'morgan';
import cors from 'cors';
import initRoutes from './routes';
import { handleLanguage, trimRequestAll } from './middlewares';
export async function createApp(port: number): Promise<Express> {
  const app = express();
  app.set('port', port);

  this.app.use(cors());
  this.app.use(cors({ optionsSuccessStatus: 200 }));
  this.app.use(urlencoded({ extended: true }));
  this.app.use(json());
  this.app.use(morgan('combined'));
  this.app.use(express.static('public'));
  this.app.use('/uploads', express.static('uploads'));
  this.app.use(handleLanguage);
  this.app.use(trimRequestAll);
  initRoutes(app);

  // database connection
  await connect();

  return app;
}
