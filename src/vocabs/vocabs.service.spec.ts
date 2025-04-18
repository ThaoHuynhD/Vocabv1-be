import { Test, TestingModule } from '@nestjs/testing';
import { VocabService } from './vocabs.service';

describe('VocabsService', () => {
  let service: VocabService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VocabService],
    }).compile();

    service = module.get<VocabService>(VocabService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
