import {
  PrimaryKey,
  Model,
  Column,
  Table,
  DataType,
  AllowNull,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Validate,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import sequelize from 'sequelize';
import { IS_ACTIVE } from 'database/database.constants';
import { Role } from 'components/auth/models/role.model';
import { User } from 'components/user/models/user.model';

@Table({ modelName: 'user_role' })
export class UserRole extends Model<UserRole> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  role_id: number;

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
