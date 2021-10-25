import { singleton } from 'tsyringe';
import { BaseService } from 'shared/services/base.service';
import { IS_ACTIVE } from 'database/database.constants';
import { User } from '../models/user.model';

@singleton()
export class UserService extends BaseService<User> {
  public model = User;
  constructor() {
    super();
  }
}
