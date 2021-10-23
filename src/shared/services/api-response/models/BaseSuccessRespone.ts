import { IApiDataSuccessResponse } from '../interface/IApiDataSuccessResponse';
import { BaseResponse } from './BaseResponse';

export class BaseSuccessResponse<T> extends BaseResponse implements IApiDataSuccessResponse<T> {
  data?: T | T[];
  constructor(_code: number, _data?: T | T[]) {
    super(_code, true);
    this.data = _data;
    return this;
  }
}
