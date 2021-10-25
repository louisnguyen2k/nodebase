import environment from 'configs/environment.constants';
import { IWithMessage } from '../interface/IWithMessage';

export class BaseErrorResponse extends Error implements IWithMessage {
  code: number;
  status: boolean;
  message: string;
  debug?: Error[] | Error;

  constructor(_code: number, _errors?: Error[] | Error, _message?: string) {
    super(_message);
    this.code = _code;
    this.status = false;
    this.debug = environment.app_env === 'production' ? undefined : _errors;
  }

  public withMessage(_message: string): BaseErrorResponse {
    this.message = _message;
    return this;
  }
}
