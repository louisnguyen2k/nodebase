import { User } from '@components/user/models/user.model';
import { Sequelize, Model, DataTypes, HasManyGetAssociationsMixin, Optional } from 'sequelize';

export interface RoleAttribute {
  id: number;
  name: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
// interface RoleCreationAttributes extends Optional<RoleAttribute, 'id'> {}
// You can write `extends Model<RoleAttribute, RoleAttribute>` instead,
// but that will do the exact same thing as below
export class Role extends Model<RoleAttribute> implements RoleAttribute {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public slug!: string | null; // for nullable fields

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  getUsers!: HasManyGetAssociationsMixin<User>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly users?: User[]; // Note this is optional since it's only populated when explicitly requested in code
}

export const initModel = (sequelize: Sequelize) => {
  Role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      slug: {
        type: new DataTypes.STRING(128),
        allowNull: false,
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
      tableName: 'roles',
      sequelize, // passing the `sequelize` instance is required
    },
  );

  Role.belongsToMany(User, { through: 'user_role' });
  return Role;
};
