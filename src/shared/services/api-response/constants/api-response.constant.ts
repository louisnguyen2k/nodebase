export enum SuccessMessage {
  Geted = 'Get resources successfully',
  Created = 'Create resource success.',
  Updated = 'Update resource success.',
  Deleted = 'Delete resource success.',
}

export enum ErrorMessage {
  Validate = 'Validation Error',
  Conflict = 'Conflict Error',
  NotFound = 'NotFound Error',
  InValid = 'Invalid Error',
  Forbidden = 'Forbidden Error',
  UnAuthorized = 'UnAuthorized User Error.',
  Server = 'Server Internal.',
  HmacInvalid = 'Hmac Signature Invalid',
}
export enum HttpCode {
  Success = 200,
  Created = 201,
  NotFound = 404,
  BadRequest = 400,
  Server = 500,
  UnAuthorized = 401,
  Conflict = 409,
  Forbidden = 403,
}
