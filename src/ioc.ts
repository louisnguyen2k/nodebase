// Target this file in your tsoa.json's "iocModule" property

import { IocContainer } from '@tsoa/runtime';
import { JWTAuthGuard } from 'components/auth/guards/jwt-auth.guard';
import { container } from 'tsyringe';

export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => {
    return container.resolve<T>(controller as never);
  },
};
