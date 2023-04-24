import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class GroupInputSchema {
  @Expose()
  @IsString()
  name: string;
}
