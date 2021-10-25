import { Body, Request, Get, Path, Post, Put, Query, Route, SuccessResponse, Delete, Tags, Security } from 'tsoa';
import { handleSingleFile } from 'middlewares/upload.middleware';
import { detectedDeviceMiddleware } from 'middlewares/detected-device.middleware';
import { BaseSuccessResponse } from 'shared/services/api-response/models/BaseSuccessRespone';
import { Express } from 'shared/types/Express';
import { LoginDto } from '../dto/Login.dto';
import { RegisterDto } from '../dto/Register.dto';
import { ForbiddenErrorResponse } from 'shared/services/api-response/models/errors';

@Route('auth')
@Tags('Auths')
export class AuthController {
  constructor() {}
  /**
   * @summary Api register new user account
   * @param body
   * @returns Promise
   */

  @Security('Authorization')
  @Post('/register')
  public async register(@Request() request: Express.Request, @Body() body: RegisterDto): Promise<any> {
    return { body };
  }

  /**
   * @summary Api login user account
   * @param body
   * @returns Promise
   */
  @Post('/login')
  public async login(@Request() request: Express.Request, @Body() body: LoginDto): Promise<any> {
    const device = detectedDeviceMiddleware(request);
    const { locales } = request;
    return { body };
  }
}
