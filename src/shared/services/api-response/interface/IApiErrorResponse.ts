import { IApiResponse } from './IApiResponse';

export interface IApiDebugResponse extends IApiResponse {
  debug?: Error[] | Error;
}
