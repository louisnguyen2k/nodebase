import { Sequelize, Model, Optional, DataTypes } from 'sequelize';

export interface UserRoleAttribute {
  id: number;
  user_id: number;
  role_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
export interface UserRoleCreationAttributes extends Optional<UserRoleAttribute, 'id'> {}

export class UserRoles extends Model<UserRoleAttribute, UserRoleCreationAttributes> implements UserRoleAttribute {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public user_id!: number;
  public role_id!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

export const initModel = (sequelize: Sequelize) => {
  UserRoles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      user_id: { allowNull: false, type: DataTypes.INTEGER },
      role_id: { allowNull: false, type: DataTypes.INTEGER },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'user_role',
      sequelize, // passing the `sequelize` instance is required
    },
  );

  return UserRoles;
};
