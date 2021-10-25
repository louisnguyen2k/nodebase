import { Model, Sequelize } from 'sequelize';
import { IBaseService } from './interfaces/IBaseService';
import { ApiResponseService } from './api-response/api-response.service';
import { ConflictErrorResponse } from './api-response/models/errors';

export class BaseService<E extends Model> implements IBaseService<E> {
  public model: any;
  constructor() {}

  async createOne(data: Object = {}, options: Object = {}) {
    return this.model.create(data, options).then((result) => {
      return result;
    });
  }

  async bulkCreate(data: Object = {}, options: Object = {}) {
    return this.model.bulkCreate(data, options).then((result) => {
      return result;
    });
  }

  async findOne(options: Object = {}) {
    return this.model.findOne(options);
  }

  async findAll(options: Object = {}) {
    return this.model.findAll(options);
  }

  async findAndCountAll(options: Object = {}): Promise<{ count: number; rows: Array<any> }> {
    return this.model.findAndCountAll(options);
  }

  async update(data: any = null, options: Object = {}) {
    const list = await this.findAll(options);
    if (list.length === 0) throw new ConflictErrorResponse();
    return this.model.update(data, options);
  }

  async inActive(data: any = null, options: Object = {}) {
    const list = await this.findAll(options);
    if (list.length === 0) throw new ConflictErrorResponse();
    return this.model.update(data, options);
  }

  async destroy(data: any = null, options: Object = {}) {
    const check = await this.findAll(options);
    if (check.length === 0) throw new ConflictErrorResponse();
    return this.model.update(data, options);
  }
}
