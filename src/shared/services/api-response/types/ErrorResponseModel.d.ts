export interface ErrorResponseModel {
  status: number;
  code: number | string;
  message?: string;
  errors?: any;
  debug?: any;
}
