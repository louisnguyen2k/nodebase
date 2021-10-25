import { HttpCode, SuccessMessage } from '../../constants/api-response.constant';
import { BaseSuccessResponse } from '../BaseSuccessRespone';

export class UpdatedSuccessResponse<T> extends BaseSuccessResponse<T> {
  constructor(_data: T, _message?: string) {
    super(HttpCode.Created, _data);
    this.withMessage(_message || SuccessMessage.Updated);
  }
}
