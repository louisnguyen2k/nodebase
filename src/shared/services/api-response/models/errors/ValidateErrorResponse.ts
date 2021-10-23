import environment from 'configs/environment';
import { ErrorMessage, HttpCode } from '../../constants/api-response.constant';
import { BaseErrorResponse } from '../BaseErrorResponse';

export class ValidateErrorResponse extends BaseErrorResponse {
  constructor(_errors?: Error[] | Error, _message?: string) {
    super(HttpCode.BadRequest, _errors);
    this.withMessage(_message || ErrorMessage.Validate);
  }
}
