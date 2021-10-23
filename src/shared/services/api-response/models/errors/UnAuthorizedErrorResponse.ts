import { ErrorMessage, HttpCode } from '../../constants/api-response.constant';
import { BaseErrorResponse } from '../BaseErrorResponse';

export class UnAuthorizedErrorResponse extends BaseErrorResponse {
  constructor(_errors?: Error[] | Error, _message?: string) {
    super(HttpCode.UnAuthorized, _errors);
    this.withMessage(_message || ErrorMessage.UnAuthorized);
  }
}
