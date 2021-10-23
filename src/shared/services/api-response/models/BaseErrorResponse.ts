import environment from 'configs/environment';
import { IApiDebugResponse } from '../interface/IApiErrorResponse';

export class BaseErrorResponse extends Error implements IApiDebugResponse {
  code: number;
  status: boolean;
  debug: Error[] | Error;

  constructor(_code: number, _errors?: Error[] | Error) {
    super('Error');
    this.code = _code;
    this.status = false;
    this.debug = environment.app_env === 'production' ? undefined : _errors;
  }

  public withMessage(_message: string) {
    this.message = this.message;
  }
}
