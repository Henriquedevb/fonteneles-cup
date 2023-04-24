import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class SeguimistaInputSchema {
  @Expose()
  @IsString()
  full_name: string;

  @Expose()
  @IsString()
  date_of_birth: string;

  @Expose()
  @IsString()
  nickname: string;

  @Expose()
  @IsString()
  profession: string;

  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  neighborhood: string;

  @Expose()
  @IsString()
  city: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  mobile_phone: string;

  @Expose()
  @IsString()
  landline_phone: string;
}
