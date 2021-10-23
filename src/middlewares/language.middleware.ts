import { vi, en } from '../shared/i18n';
import { Response, NextFunction, Request } from 'express';

export const handleLanguage = function (req: Request, res: Response, next: NextFunction) {
  const locale = req.headers.lang || req.headers.language;
  switch (locale) {
    case 'vi':
      req.locales = vi;
      break;
    case 'en':
      req.locales = en;
      break;
    default:
      req.locales = vi;
  }
  next();
};
