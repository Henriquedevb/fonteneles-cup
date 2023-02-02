import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarketListService } from './market-list.service';
import { CreateMarketListDto } from './dto/create-market-list.dto';
import { UpdateMarketListDto } from './dto/update-market-list.dto';

@Controller('market-list')
export class MarketListController {
  constructor(private readonly marketListService: MarketListService) {}

  @Post()
  create(@Body() createMarketListDto: CreateMarketListDto) {
    return this.marketListService.create(createMarketListDto);
  }

  @Get()
  findAll() {
    return this.marketListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketListService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarketListDto: UpdateMarketListDto,
  ) {
    return this.marketListService.update(id, updateMarketListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketListService.remove(id);
  }
}
