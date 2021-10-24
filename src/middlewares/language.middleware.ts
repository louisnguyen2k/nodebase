import { vi, en } from '../shared/locales';
import { Response, NextFunction } from 'express';
import { Express } from 'shared/types/Express';

export const handleLanguage = function (req: Express.Request, res: Response, next: NextFunction) {
  const locale = req.headers.lang || req.headers.language;
  switch (locale) {
    case 'vi' || 'vietnamese':
      req.locales = vi;
      break;
    case 'en' || 'english':
      req.locales = en;
      break;
    default:
      req.locales = vi;
  }
  next();
};
