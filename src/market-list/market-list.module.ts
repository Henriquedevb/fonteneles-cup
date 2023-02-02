import { PrismaService } from '../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MarketListService } from './market-list.service';
import { MarketListController } from './market-list.controller';

@Module({
  imports: [],
  controllers: [MarketListController],
  providers: [MarketListService, PrismaService],
})
export class MarketListModule {}
