import { Socket } from 'socket.io';
import { JWTAuthGuard } from '@components/auth/guards/jwt-auth.guard';
import { ApiResponseService } from '@shared/services/api-response/api-response.service';
import { Authorization } from '@components/auth/types/Authorization';

function socketAuthentication(socket: any, next: (error?: Error) => void): void {
  const jwtAuthGuard = new JWTAuthGuard();

  const { token, authorization } = socket.handshake.auth;
  if (authorization || token) {
    jwtAuthGuard
      .verify(token as string)
      .then((authorization: Authorization) => {
        socket.handshake.auth.user = authorization;
        next();
      })
      .catch((error: Error) => {
        next(new Error('token unauthorized to connect socket'));
      });
  } else {
    next(new Error(`token isn't provided to connect socket`));
  }
}
export { socketAuthentication };
