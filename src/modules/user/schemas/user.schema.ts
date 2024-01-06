import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, IsUUID } from 'class-validator';

@Exclude()
export class UserSchema {
  @Expose()
  @IsUUID(4)
  id: string;

  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  password: undefined;
}
