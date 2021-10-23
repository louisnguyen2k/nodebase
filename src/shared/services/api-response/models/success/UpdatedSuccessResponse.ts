import { HttpCode, SuccessMessage } from '../../constants/api-response.constant';
import { IApiDataSuccessResponse } from '../../interface/IApiDataSuccessResponse';
import { BaseResponse } from '../BaseResponse';
import { BaseSuccessResponse } from '../BaseSuccessRespone';

export class UpdatedSuccessResponse<T> extends BaseSuccessResponse<T> {
  constructor(_data: T, _message?: string) {
    super(HttpCode.Created, _data);
    this.withMessage(_message || SuccessMessage.Updated);
  }
}
