import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterContentService } from './help-center-content.service';

describe('HelpCenterContentService', () => {
  let service: HelpCenterContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCenterContentService],
    }).compile();

    service = module.get<HelpCenterContentService>(HelpCenterContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
