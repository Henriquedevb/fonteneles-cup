import { IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString()
  usernameOrEmail: string;

  @IsString()
  password: string;
}
