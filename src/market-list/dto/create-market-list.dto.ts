import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { MarketList } from '../entities/market-list.entity';

export class CreateMarketListDto extends MarketList {
  @IsUUID()
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  quantity: number;
}
