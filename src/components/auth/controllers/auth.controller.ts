import { Body, Request, Get, Path, Post, Put, Query, Route, SuccessResponse, Delete, Tags, Security } from 'tsoa';
import { handleSingleFile } from '../../../middlewares/upload.middleware';
import { detectedDeviceMiddleware } from '../../../middlewares/detectedDevice.middleware';
import { LoginDto } from '../dto/Login.dto';
import express from 'express';
import { RegisterDto } from '../dto/Register.dto';
import { BaseSuccessResponse } from '@shared/services/api-response/models/BaseSuccessRespone';

@Route('auth')
@Tags('Auths')
export class AuthController {
  constructor() {}
  /**
   * @summary Api register new user account
   * @param body
   * @returns Promise
   */
  @Post('/register')
  public async register(@Request() request: express.Request, @Body() body: RegisterDto): Promise<any> {
    return { body };
  }

  /**
   * @summary Api login user account
   * @param body
   * @returns Promise
   */
  @Post('/login')
  public async login(@Request() request: express.Request, @Body() body: LoginDto): Promise<any> {
    const device = detectedDeviceMiddleware(request);
    // const { locales } = request;
    return { body };
  }
}
