import { ErrorMessage, HttpCode } from '../../constants/api-response.constant';
import { BaseErrorResponse } from '../BaseErrorResponse';

export class InValidErrorResponse extends BaseErrorResponse {
  constructor(_errors?: Error[] | Error, _message?: string) {
    super(HttpCode.BadRequest, _errors);
    this.withMessage(_message || ErrorMessage.InValid);
  }
}
