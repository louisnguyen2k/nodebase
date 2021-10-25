import { BaseSuccessResponse } from './models/BaseSuccessRespone';
import { BaseErrorResponse } from './models/BaseErrorResponse';
import { Pagination } from './types/Pagination';

export class ApiResponseService<T> {
  public model?: T;

  public withSuccess(baseSuccessResponse: BaseSuccessResponse<T>): Omit<BaseSuccessResponse<T>, 'withMessage'> {
    return { ...baseSuccessResponse };
  }

  public withError(baseErrorResponse: BaseErrorResponse): Omit<BaseErrorResponse, 'withMessage'> {
    return { ...baseErrorResponse };
  }
}
