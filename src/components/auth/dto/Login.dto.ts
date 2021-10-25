import { IsNotEmpty, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class LoginDto {
  constructor(_loginDto: LoginDto) {
    this.username = _loginDto.username;
    this.password = _loginDto.password;
  }
  @IsNotEmpty()
  @IsPhoneNumber('VN')
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
