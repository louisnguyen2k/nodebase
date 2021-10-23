import { BaseSuccessResponse } from './models/BaseSuccessRespone';
import { BaseErrorResponse } from './models/BaseErrorResponse';
import { Pagination } from './types/Pagination';

export class ApiResponseService<T> {
  model: T;
  withSuccess(baseSuccessResponse: BaseSuccessResponse<T>): Omit<BaseSuccessResponse<T>, 'withMessage'> {
    return { ...baseSuccessResponse };
  }

  withError(baseErrorResponse: BaseErrorResponse): BaseErrorResponse {
    throw { ...baseErrorResponse };
  }
}
