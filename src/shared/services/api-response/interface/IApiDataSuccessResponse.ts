import { LengthAwareMeta } from '../types/LengthAwareMeta';
import { IApiResponse } from './IApiResponse';

export interface IApiDataSuccessResponse<T> extends IApiResponse {
  data?: T | T[];
}
