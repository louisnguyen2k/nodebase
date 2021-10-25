import { Response, NextFunction } from 'express';
import { ValidateError } from 'tsoa';
import { ValidationError } from 'class-validator';
import { Express } from 'shared/types/Express';
import { logger } from 'shared/services/logger/logger';
import { ApiResponseService } from 'shared/services/api-response/api-response.service';
import {
  ConflictErrorResponse,
  ForbiddenErrorResponse,
  InValidErrorResponse,
  NotFoundErrorResponse,
  ServerErrorResponse,
  UnAuthorizedErrorResponse,
  ValidateErrorResponse,
} from 'shared/services/api-response/models/errors';
import _ from 'lodash';
import { BaseErrorResponse } from 'shared/services/api-response/models/BaseErrorResponse';
import { HttpCode } from 'shared/services/api-response/constants/api-response.constant';

function errorHandler(
  error: Error | Error[],
  req: Express.Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const { locales } = req;
  console.log('error', error);
  console.log('arr', _.isArray(error));
  console.log('arr2', error[0] instanceof ValidationError);
  if (error instanceof ValidateError) {
    logger.warn({ message: `Validation tsoa error for ${req.path}:, ${JSON.stringify(error.fields)}` });
    const errorResponse = new InValidErrorResponse(error);
    return res.status(HttpCode.BadRequest).json(_.omit(errorResponse, ['withMessage']));
  } else if (_.isArray(error) && error.length > 0 && error[0] instanceof ValidationError) {
    logger.warn({ message: `Validation error:, ${JSON.stringify(error)}` });
    const errorResponse = new ValidateErrorResponse(error);
    return res.status(HttpCode.BadRequest).json(_.omit(errorResponse, ['withMessage']));
  } else if (error instanceof ConflictErrorResponse) {
    logger.warn({ message: `ConflictErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof ForbiddenErrorResponse) {
    logger.warn({ message: `ForbiddenErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof InValidErrorResponse) {
    logger.warn({ message: `InValidErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof NotFoundErrorResponse) {
    logger.warn({ message: `NotFoundErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof ServerErrorResponse) {
    logger.warn({ message: `ServerErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof UnAuthorizedErrorResponse) {
    logger.warn({ message: `UnAuthorizedErrorResponse :, ${JSON.stringify(error)}` });
  } else if (error instanceof ValidateErrorResponse) {
    logger.warn({ message: `ValidateErrorResponse :, ${JSON.stringify(error)}` });
  } else {
    logger.warn({ message: `ServerErrorResponse :, ${JSON.stringify(error)}` });
  }
  return res.status((error as BaseErrorResponse).code || HttpCode.Server).json(_.omit(error, ['withMessage']));
}
export { errorHandler };
