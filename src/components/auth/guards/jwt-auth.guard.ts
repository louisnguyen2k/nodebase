import { injectable, singleton, registry } from 'tsyringe';
import jwt from 'jsonwebtoken';
import environment from 'configs/environment.constants';
import { Authorization } from '../types/Authorization';
import { JWTPayload } from '../types/JWTPayload';

@singleton()
export class JWTAuthGuard {
  sign(payload: JWTPayload) {
    return jwt.sign({ ...payload }, environment.app_secret, {
      expiresIn: environment.jwt_tll,
      algorithm: 'HS256',
    });
  }

  verify(token: string): Promise<Authorization> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, environment.app_secret, (err: Error, user: Authorization) => {
        if (err || !user) {
          return reject(err);
        }
        resolve(user);
      });
    });
  }
}
