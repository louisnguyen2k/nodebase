import { Express, Response, Request } from 'express';
import { RegisterRoutes } from './routes'; // here
import * as swaggerUi from 'swagger-ui-express';
import environment from '../configs/environment';
function initRoutes(app: Express): void {
  app.use(
    '/docs/v1',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
        docExpansion: 'none',
      },
      explorer: true,
    }),
  );
  RegisterRoutes(app);
  app.get('/', (req: Request, res: Response) =>
    res
      .status(200)
      .setHeader('Content-Type', 'text/html')
      .send(
        `Documents for ${environment.app_name}: --> <a href="${req.protocol}://${req.headers.host}/api/docs/v1">click here</a>`,
      ),
  );
}
export default initRoutes;
