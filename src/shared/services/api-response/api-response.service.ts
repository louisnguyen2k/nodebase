import { singleton } from 'tsyringe';
import { HttpCode } from './constants/api-response.constant';
import { Pagination } from './types/Pagination';

export interface ResponseOption {
  message?: string;
  code?: number;
  status?: boolean;
}

@singleton()
export class ApiResponseService {
  public withSuccess(data: { success: boolean }, options?: ResponseOption) {
    return { data: { success: true }, status: true, code: HttpCode.Success, ...options };
  }

  public withData<T>(data: T, options?: ResponseOption) {
    return { data: data, status: true, code: HttpCode.Success, ...options };
  }

  public withPrimitive<T>(data: { [key: string]: any }, options?: ResponseOption) {
    return { data, status: true, code: HttpCode.Success, ...options };
  }

  public withPaginate<T>(data: T[], pagination: Pagination, options?: ResponseOption) {
    return {
      data,
      meta: {
        pagination,
      },
      status: true,
      code: HttpCode.Success,
      ...options,
    };
  }
}
