import { ErrorMessage, HttpCode } from '../../constants/api-response.constant';
import { BaseErrorResponse } from '../BaseErrorResponse';

export class NotFoundErrorResponse extends BaseErrorResponse {
  constructor(_errors?: Error[] | Error, _message?: string) {
    super(HttpCode.NotFound, _errors);
    this.withMessage(_message || ErrorMessage.NotFound);
    console.log('mgs', this.message);
  }
}
