import {
  PrimaryKey,
  Model,
  Column,
  Table,
  BelongsToMany,
  Scopes,
  DataType,
  AllowNull,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Min,
  Max,
  Validate,
  Default,
} from 'sequelize-typescript';
import { USER_GENDER } from '../user.constants';
import { IS_ACTIVE } from 'database/database.constants';
import { UserRole } from 'components/auth/models/user-role.model';
import { Role } from 'components/auth/models/role.model';
import sequelize from 'sequelize';

@Scopes(() => ({
  roles: {
    include: [
      {
        model: Role,
        through: { as: 'roles', attributes: [] },
        foreignKey: 'user_id',
      },
    ],
  },
}))
@Table({ modelName: 'users' })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  id!: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(12) })
  phone!: string;

  @AllowNull(true)
  @Validate({ isEmail: { msg: 'Email address must be valid' }, min: 6, max: 128 })
  @Column({ type: DataType.STRING })
  email!: string;

  @AllowNull(false)
  @Validate({
    len: { args: [6, 128], msg: 'Email address must be between 6 and 128 characters in length' },
  })
  @Column({ type: DataType.STRING })
  password!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name!: string | null;

  @AllowNull(true)
  @Validate({
    isIn: {
      msg: 'Invalid gender.',
      args: [Object.values(USER_GENDER)],
    },
  })
  @Column({ type: DataType.INTEGER })
  gender!: number | null;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  token!: string | null;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  app_token!: string | null;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  last_login_date!: Date;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  date_of_birth!: string | null;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  avatar!: string | null;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  device_id!: string | null;

  @AllowNull(false)
  @Default(IS_ACTIVE.ACTIVE)
  @Validate({
    isIn: {
      msg: 'Invalid active status.',
      args: [Object.values(IS_ACTIVE)],
    },
  })
  @Column({ type: DataType.INTEGER })
  is_active!: number;

  @BelongsToMany(() => Role, () => UserRole)
  roles?: Role[];

  @CreatedAt
  @Default(sequelize.literal('CURRENT_TIMESTAMP'))
  @Column
  created_at!: Date;

  @UpdatedAt
  @Default(sequelize.literal('CURRENT_TIMESTAMP'))
  @Column
  updated_at!: Date;

  @DeletedAt
  @Column
  deleted_at!: Date;
}
