import { BaseService } from 'shared/services/base/base.service';
import { Role } from '../models/role.model';

export class AuthService extends BaseService<Role> {
  public model = Role;
  constructor() {
    super();
  }

  public login(username: string, password: string) {}
}
