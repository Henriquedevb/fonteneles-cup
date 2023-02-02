import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketListDto } from './create-market-list.dto';

export class UpdateMarketListDto extends PartialType(CreateMarketListDto) {
  id: string;
  title: string;
  description: string;
  quantity: number;
}
