import { validateOrReject, validate } from 'class-validator';
import { LoginDto } from '../dto/Login.dto';
export const validateLoginParams = async (_loginDto: LoginDto) => {
  const validateLoginDto = new LoginDto({ ..._loginDto });
  await validateOrReject(validateLoginDto);
};
