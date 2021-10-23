import { HttpCode, SuccessMessage } from '../../constants/api-response.constant';
import { BaseSuccessResponse } from '../BaseSuccessRespone';

export class DeletedSuccessResponse<T> extends BaseSuccessResponse<T> {
  constructor(_data: T, _message?: string) {
    super(HttpCode.Success, _data);
    this.withMessage(_message || SuccessMessage.Deleted);
  }
}
