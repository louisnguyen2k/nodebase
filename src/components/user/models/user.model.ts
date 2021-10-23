import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from 'sequelize';
import { Role } from '@components/auth/models/role.model';
import { USER_GENDER } from '../user.constants';
import { IS_ACTIVE } from '@shared/constants';

export interface UserAttribute {
  id: number;
  phone: string;
  email?: string;
  password: string;
  name?: string;
  gender?: number;
  token?: string;
  app_token?: string;
  last_login_date?: Date;
  date_of_birth?: string;
  avatar?: string;
  device_id?: string;
  is_active: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
interface UserCreationAttributes extends Optional<UserAttribute, 'id'> {}

export class User extends Model<UserAttribute, UserCreationAttributes> implements UserAttribute {
  id!: number; // Note that the `null assertion` `!` is required in strict mode.
  phone!: string;
  email!: string | null; // for nullable fields
  password!: string;
  name!: string | null; // for nullable fields
  gender!: number | null; // for nullable fields
  token!: string | null; // for nullable fields
  app_token!: string | null; // for nullable fields
  last_login_date!: Date | null; // for nullable fields
  date_of_birth!: string | null; // for nullable fields
  avatar!: string | null; // for nullable fields
  device_id!: string | null; // for nullable fields
  is_active!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.

  public getRoles!: HasManyGetAssociationsMixin<Role>;
  public addRoles!: HasManyAddAssociationMixin<Role, number>;
  public hasRole!: HasManyHasAssociationMixin<Role, number>;
  public countRoles!: HasManyCountAssociationsMixin;
  public createRoles!: HasManyCreateAssociationMixin<Role>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly roles?: Role[]; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    roles: Association<User, Role>;
  };
}

export const initModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 128],
            msg: 'Email address must be between 6 and 128 characters in length',
          },
          isEmail: {
            msg: 'Email address must be valid',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: { notEmpty: true, len: [6, 100] },
      },

      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      gender: {
        allowNull: true,
        type: DataTypes.INTEGER,
        values: Object.values(USER_GENDER),
        validate: {
          isIn: {
            args: [Object.values(USER_GENDER)],
            msg: 'Invalid gender.',
          },
        },
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      app_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_login_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      device_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: {
        allowNull: false,
        type: DataTypes.INTEGER,
        values: Object.values(IS_ACTIVE),
        defaultValue: IS_ACTIVE.ACTIVE,
        validate: {
          isIn: {
            args: [Object.values(IS_ACTIVE)],
            msg: 'Invalid active status.',
          },
        },
      },
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
      tableName: 'users',
      sequelize, // passing the `sequelize` instance is required
    },
  );

  User.belongsToMany(Role, { through: 'user_role' });
  return User;
};
