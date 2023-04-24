import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AvatarSchema {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  mimetype: string;

  @Expose()
  data: string;
}
