import * as express from 'express';
import { JWTAuthGuard } from '@components/auth/guards/jwt-auth.guard';
import { Authorization } from '@components/auth/types/Authorization';
import { ApiResponseService } from '@shared/services/api-response/api-response.service';
import { UnAuthorizedErrorResponse } from '@shared/services/api-response/models/errors';

function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
): Promise<Authorization> {
  const jwtAuthGuard = new JWTAuthGuard();
  const apiResponseService = new ApiResponseService();
  /// authen access token
  if (securityName === 'authorization') {
    const token = request.headers['authorization'] || (request.headers['token'] as string);
    if (!token) {
      Promise.reject(apiResponseService.withError(new UnAuthorizedErrorResponse(null)));
    }
    return jwtAuthGuard
      .verify(token)
      .then(async (authorization: Authorization) => {
        // const foundRole = Object.keys(ROLE).find((k) => ROLE[k] == authorization?.roles);
        // if (scopes && scopes.length > 0) {
        //   if (foundRole && scopes.includes(foundRole.toLowerCase())) {
        //     return decodedToken;
        //   }
        //   throw Promise.reject(apiResponseService.withError(new UnAuthorizedErrorResponse(null)));
        // }
        return authorization;
      })
      .catch((err) => {
        return Promise.reject(apiResponseService.withError(new UnAuthorizedErrorResponse(null)));
      });
  }
  return Promise.reject(apiResponseService.withError(new UnAuthorizedErrorResponse(null)));
}
export { expressAuthentication };
