import { HttpCode, SuccessMessage } from '../../constants/api-response.constant';
import { BaseSuccessResponse } from '../BaseSuccessRespone';

export class GetedSuccessResponse<T> extends BaseSuccessResponse<T> {
  constructor(_data: T | T[], _message?: string) {
    super(HttpCode.Success, _data);
    this.withMessage(_message || SuccessMessage.Geted);
  }
}
