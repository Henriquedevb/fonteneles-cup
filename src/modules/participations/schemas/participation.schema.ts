import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

@Exclude()
export class ParticipationSchema {
  @Expose()
  @IsString()
  seguimista_id: string;

  @Expose()
  @IsString()
  group_id: string;

  @Expose()
  @IsNumber()
  @Min(4)
  year: number;
}
