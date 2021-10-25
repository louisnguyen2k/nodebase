import { singleton, injectable, inject } from 'tsyringe';
import { BaseService } from 'shared/services/base.service';
import { Role } from '../models/role.model';
import { LoginDto } from '../dto/Login.dto';
import { IS_ACTIVE } from 'database/database.constants';
import { JWTAuthGuard } from '../guards/jwt-auth.guard';
import { UserService } from 'components/user/services/user.service';
import { NotFoundErrorResponse } from 'shared/services/api-response/models/errors';

@singleton()
export class AuthService extends BaseService<Role> {
  public model = Role;
  constructor(private readonly jwtAuthGuard: JWTAuthGuard, private readonly userService: UserService) {
    //@inject('AuthService')
    super();
  }

  public async login(username: string, password: string) {
    const user = await this.userService.findOne({ where: { phone: username, is_active: IS_ACTIVE.ACTIVE } });
    if (!user) throw new NotFoundErrorResponse(undefined, 'User not existed.');
    return user;
  }
}
