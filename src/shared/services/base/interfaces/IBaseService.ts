import { Model } from 'sequelize';

export interface IBaseService<E> {
  createOne: (data: E, options: Object) => Promise<E>;
  bulkCreate(data);

  findOne: (options: Object) => Promise<E>;
  findAll: (options: Object) => Promise<E[]>;
  findAndCountAll: (options: Object) => Promise<{ count: number; rows: Array<E[]> }>;

  update: (data: E, options: Object) => Promise<E>;

  inActive: (options: Object) => Promise<boolean>;

  destroy: (options: Object) => Promise<boolean>;
}
