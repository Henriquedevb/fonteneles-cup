import { Test, TestingModule } from '@nestjs/testing';
import { MarketListService } from '../market-list.service';

describe('MarketListService', () => {
  let service: MarketListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketListService],
    }).compile();

    service = module.get<MarketListService>(MarketListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
