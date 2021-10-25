import * as express from 'express';
import { JWTAuthGuard } from 'components/auth/guards/jwt-auth.guard';
import { Authorization } from 'components/auth/types/Authorization';
import { UnAuthorizedErrorResponse, ForbiddenErrorResponse } from 'shared/services/api-response/models/errors';
import { VerifyErrors } from 'jsonwebtoken';
function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
): Promise<Authorization> {
  const jwtAuthGuard = new JWTAuthGuard();
  /// authen access token
  if (securityName === 'Authorization' || securityName === 'authorization') {
    const token =
      (request.headers['Authorization'] as string) ||
      (request.headers['authorization'] as string) ||
      (request.headers['token'] as string);
    if (!token) {
      Promise.reject(new UnAuthorizedErrorResponse());
    }
    return jwtAuthGuard
      .verify(token)
      .then(async (authorization: Authorization) => {
        // const foundRole = Object.keys(ROLE).find((k) => ROLE[k] == authorization?.roles);
        // if (scopes && scopes.length > 0) {
        //   if (foundRole && scopes.includes(foundRole.toLowerCase())) {
        //     return decodedToken;
        //   }
        //   new ForbiddenErrorResponse(null);
        // }
        return authorization;
      })
      .catch((error: VerifyErrors) => {
        throw new UnAuthorizedErrorResponse(error);
      });
  }
  Promise.reject(new UnAuthorizedErrorResponse());
}
export { expressAuthentication };
