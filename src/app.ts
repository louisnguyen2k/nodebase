import express, { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import initRoutes from './routes';
import { handleLanguage } from './middlewares/language.middleware';
import { trimRequestAll } from './middlewares/trim-request.middleware';
import { errorHandler } from 'middlewares/error-handler.middleware';
import { notFoundHandler } from 'middlewares/not-found-handler.middleware';
import { API_DOCS } from 'configs/configs.constants';

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
  app.use(
    API_DOCS,
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
        docExpansion: 'none',
      },
      explorer: true,
    }),
  );
  initRoutes(app);
  app.use(errorHandler);
  app.use(notFoundHandler);

  return app;
}
