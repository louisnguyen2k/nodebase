import { IsNotEmpty, IsPhoneNumber, IsString, Min } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsPhoneNumber()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Min(6)
  password: string;
}
