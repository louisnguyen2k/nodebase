import { LengthAwareMeta } from '../types/LengthAwareMeta';
import { IApiDataSuccessResponse } from './IApiDataSuccessResponse';

export interface IApiPaggingResponse<T> extends IApiDataSuccessResponse<T> {
  meta: LengthAwareMeta;
}
