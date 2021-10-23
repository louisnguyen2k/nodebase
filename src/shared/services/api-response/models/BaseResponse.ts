import { IApiResponse } from '../interface/IApiResponse';

export class BaseResponse implements IApiResponse {
  code: number;
  status: boolean;
  message: string;
  constructor(_code: number, _status: boolean) {
    this.code = _code;
    this.status = _status;
  }

  public withMessage(_message: string) {
    this.message = this.message;
  }
}
