import { HttpCode, SuccessMessage } from '../../constants/api-response.constant';
import { IApiPaggingResponse } from '../../interface/IApiPaggingResponse';
import { LengthAwareMeta } from '../../types/LengthAwareMeta';
import { Pagination } from '../../types/Pagination';
import { BaseSuccessResponse } from '../BaseSuccessRespone';

export class PaggingSuccessResponse<T> extends BaseSuccessResponse<T> implements IApiPaggingResponse<T> {
  meta: LengthAwareMeta;
  constructor(_data: T[], _pagination: Pagination, _message?: string) {
    super(HttpCode.Success, _data);
    this.meta = { pagination: _pagination };
    this.withMessage(_message || SuccessMessage.Geted);
  }
}
