import { Response, NextFunction } from 'express';
import { ValidateError } from 'tsoa';
import { ValidationError } from 'class-validator';
import { Express } from 'shared/types/Express';
import { logger } from 'shared/logger/logger';
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

function errorHandler(error: Error, req: Express.Request, res: Response, next: NextFunction): Response | void {
  const apiResponseService = new ApiResponseService();
  const { locales } = req;
  console.log('error', error);
  if (error instanceof ValidateError) {
    logger.warn({ message: `Validation tsoa error for ${req.path}:, ${JSON.stringify(error.fields)}` });
    return res.json(apiResponseService.withError(new InValidErrorResponse(error)));
  }
  if (error instanceof ValidationError) {
    logger.warn({ message: `Validation error:, ${JSON.stringify(error)}` });
    return res.json(apiResponseService.withError(new ValidateErrorResponse(error)));
  }

  //
  if (error instanceof ConflictErrorResponse) {
    const conflictErrorResponse = new ConflictErrorResponse();
    logger.warn({ message: `ConflictErrorResponse :, ${JSON.stringify(conflictErrorResponse)}` });
    return res.status(conflictErrorResponse.code).json(_.omit(conflictErrorResponse, ['withMessage']));
  }
  if (error instanceof ForbiddenErrorResponse) {
    const forbiddenErrorResponse = new ForbiddenErrorResponse();
    logger.warn({ message: `ForbiddenErrorResponse :, ${JSON.stringify(forbiddenErrorResponse)}` });
    return res.status(forbiddenErrorResponse.code).json(_.omit(forbiddenErrorResponse, ['withMessage']));
  }
  if (error instanceof InValidErrorResponse) {
    const inValidErrorResponse = new InValidErrorResponse();
    logger.warn({ message: `InValidErrorResponse :, ${JSON.stringify(inValidErrorResponse)}` });
    return res.status(inValidErrorResponse.code).json(_.omit(inValidErrorResponse, ['withMessage']));
  }
  if (error instanceof NotFoundErrorResponse) {
    const notFoundErrorResponse = new NotFoundErrorResponse();
    logger.warn({ message: `NotFoundErrorResponse :, ${JSON.stringify(notFoundErrorResponse)}` });
    return res.status(notFoundErrorResponse.code).json(_.omit(notFoundErrorResponse, ['withMessage']));
  }
  if (error instanceof ServerErrorResponse) {
    const serverErrorResponse = new ServerErrorResponse();
    logger.warn({ message: `ServerErrorResponse :, ${JSON.stringify(serverErrorResponse)}` });
    return res.status(serverErrorResponse.code).json(_.omit(serverErrorResponse, ['withMessage']));
  }
  if (error instanceof UnAuthorizedErrorResponse) {
    const unAuthorizedErrorResponse = new UnAuthorizedErrorResponse();
    logger.warn({ message: `UnAuthorizedErrorResponse :, ${JSON.stringify(unAuthorizedErrorResponse)}` });
    return res.status(unAuthorizedErrorResponse.code).json(_.omit(unAuthorizedErrorResponse, ['withMessage']));
  }
  if (error instanceof ValidateErrorResponse) {
    const validateErrorResponse = new ValidateErrorResponse();
    logger.warn({ message: `ValidateErrorResponse :, ${JSON.stringify(validateErrorResponse)}` });
    return res.status(validateErrorResponse.code).json(_.omit(validateErrorResponse, ['withMessage']));
  }
  return res.json(apiResponseService.withError(new ServerErrorResponse(error)));
  //   return res.json({ status: 0, code: err?.code, message: err.message });
}
export { errorHandler };
