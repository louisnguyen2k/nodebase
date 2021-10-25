import { IWithMessage } from '../interface/IWithMessage';

export class BaseSuccessResponse<T> implements IWithMessage {
  code: number;
  status: boolean;
  message: string;
  data?: T | T[];
  constructor(_code: number, _data?: T | T[], _message?: string) {
    this.code = _code;
    this.data = _data;
    this.message = _message;
    this.status = true;
  }

  public withMessage(_message: string): BaseSuccessResponse<T> {
    this.message = _message;
    return this;
  }
}
