import { Express, Response, Request } from 'express';
import { RegisterRoutes } from './routes'; // here
import environment from '../configs/environment.constants';
import { API_DOCS } from '../configs/configs.constants';
function initRoutes(app: Express): void {
  RegisterRoutes(app);
  app.get('/', (req: Request, res: Response) =>
    res
      .status(200)
      .setHeader('Content-Type', 'text/html')
      .send(
        `Documents for ${environment.app_name}: --> <a href="${req.protocol}://${req.headers.host}${API_DOCS}">click here</a>`,
      ),
  );
}
export default initRoutes;
