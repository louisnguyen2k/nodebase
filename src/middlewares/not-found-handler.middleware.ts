import { Response } from 'express';
import { Express } from 'shared/types/Express';

function notFoundHandler(req: Express.Request, res: Response) {
  const { locales } = req;
  res.status(404).send({
    message: 'not found',
  });
}
export { notFoundHandler };
