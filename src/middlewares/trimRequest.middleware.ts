import { Response, NextFunction, Request } from 'express';
import { Utils } from '@shared/utils/Utils';

const trimRequestAll = function (req: Request, res: Response, next: NextFunction) {
  if (req.body) Utils.trimStringProperties(req.body);
  if (req.params) Utils.trimStringProperties(req.params);
  if (req.query) Utils.trimStringProperties(req.query);
  next();
};

const trimRequestBody = function (req: Request, res: Response, next: NextFunction) {
  if (req.body) Utils.trimStringProperties(req.body);
  next();
};

const trimRequestParam = function (req: Request, res: Response, next: NextFunction) {
  if (req.params) Utils.trimStringProperties(req.params);
  next();
};

const trimRequestQuery = function (req: Request, res: Response, next: NextFunction) {
  if (req.query) Utils.trimStringProperties(req.query);
  next();
};

export { trimRequestAll, trimRequestBody, trimRequestParam, trimRequestQuery };
