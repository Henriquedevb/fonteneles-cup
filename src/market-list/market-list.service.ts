import { PrismaService } from '../prisma/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import { CreateMarketListDto } from './dto/create-market-list.dto';
import { UpdateMarketListDto } from './dto/update-market-list.dto';
import { MarketList } from '@prisma/client';

@Injectable()
export class MarketListService {
  constructor(private prisma: PrismaService) {}
  marketList: CreateMarketListDto[] = [];

  async create(createMarketListDto: CreateMarketListDto): Promise<MarketList> {
    return await this.prisma.marketList.create({ data: createMarketListDto });
  }

  async findAll() {
    const data = await this.prisma.marketList.findMany();

    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.marketList.findUnique({
      where: {
        id,
      },
    });

    return data;
  }

  async update(id: string, updateMarketListDto: UpdateMarketListDto) {
    const data = await this.prisma.marketList.update({
      where: {
        id,
      },
      data: updateMarketListDto,
    });

    return data;
  }

  async remove(id: string) {
    await this.prisma.marketList.delete({
      where: {
        id,
      },
    });
  }
}
