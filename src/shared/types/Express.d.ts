import express from 'express';
import { Authorization } from 'components/auth/types/Authorization';

export declare namespace Express {
  interface Request extends express.Request {
    user?: Authorization;
    locales: Object;
  }
}
