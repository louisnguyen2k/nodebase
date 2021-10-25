import {
  Response,
  SuccessResponse,
  Body,
  Request,
  Get,
  Path,
  Post,
  Put,
  Query,
  Route,
  Delete,
  Tags,
  Security,
  NoSecurity,
} from 'tsoa';
import { injectable } from 'tsyringe';
import { handleSingleFile } from 'middlewares/upload.middleware';
import { detectedDeviceMiddleware } from 'middlewares/detected-device.middleware';
import { Express } from 'shared/types/Express';
import { LoginDto } from '../dto/Login.dto';
import { RegisterDto } from '../dto/Register.dto';
import {
  ForbiddenErrorResponse,
  NotFoundErrorResponse,
  UnAuthorizedErrorResponse,
} from 'shared/services/api-response/models/errors';
import { AuthService } from '../services/auth.service';
import { ApiResponseService } from 'shared/services/api-response/api-response.service';
import { BaseErrorResponse } from 'shared/services/api-response/models/BaseErrorResponse';
import { HttpCode } from 'shared/services/api-response/constants/api-response.constant';
import { validateLoginParams } from '../validators/login-params.validate';

@injectable()
@Route('auth')
@Tags('Auths')
export class AuthController {
  constructor(private readonly apiResponseService: ApiResponseService, private readonly authService: AuthService) {}
  /**
   * @summary Api register new user account
   * @param body
   * @returns Promise
   */

  // @Security('Authorization')
  @Post('/register')
  public async register(@Request() request: Express.Request, @Body() body: RegisterDto): Promise<any> {
    return { body };
  }

  /**
   * @summary Api login user account
   * @param body
   * @returns Promise
   */

  @SuccessResponse('200', 'Login')
  @Post('/login')
  public async login(@Request() request: Express.Request, @Body() body: LoginDto): Promise<any> {
    await validateLoginParams(body);
    const { username, password } = body;
    // const device = detectedDeviceMiddleware(request);
    // const { locales } = request;
    const result = await this.authService.login(username, password);
    return this.apiResponseService.withData(result, { message: 'Login success.' });
  }
}
