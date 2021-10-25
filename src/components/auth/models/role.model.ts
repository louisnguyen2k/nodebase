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
  Default,
} from 'sequelize-typescript';
import sequelize from 'sequelize';
import { User } from 'components/user/models/user.model';
import { UserRole } from './user-role.model';

@Scopes(() => ({
  users: {
    include: [
      {
        model: User,
        through: { as: 'users', attributes: [] },
      },
    ],
  },
}))
@Table({ modelName: 'roles' })
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  id!: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(128) })
  name!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(128) })
  slug!: string;

  @BelongsToMany(() => User, () => UserRole)
  users?: User[];

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
