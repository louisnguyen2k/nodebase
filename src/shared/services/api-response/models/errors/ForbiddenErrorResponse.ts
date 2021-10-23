import { ErrorMessage, HttpCode } from '../../constants/api-response.constant';
import { BaseErrorResponse } from '../BaseErrorResponse';

export class ForbiddenErrorResponse extends BaseErrorResponse {
  constructor(_errors?: Error[] | Error, _message?: string) {
    super(HttpCode.Forbidden, _errors);
    this.withMessage(_message || ErrorMessage.Forbidden);
  }
}
