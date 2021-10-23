import { IsNotEmpty, IsPhoneNumber, IsString, Min } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsPhoneNumber()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Min(6)
  password: string;
}
