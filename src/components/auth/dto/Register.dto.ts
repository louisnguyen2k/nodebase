import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, IsDate } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsDate()
  date_of_birth?: string;

  @IsString()
  avatar?: string;
}
