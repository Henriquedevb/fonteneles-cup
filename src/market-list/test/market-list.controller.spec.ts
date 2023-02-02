import { Test, TestingModule } from '@nestjs/testing';
import { MarketListController } from '../market-list.controller';
import { MarketListService } from '../market-list.service';

describe('MarketListController', () => {
  let controller: MarketListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketListController],
      providers: [MarketListService],
    }).compile();

    controller = module.get<MarketListController>(MarketListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
