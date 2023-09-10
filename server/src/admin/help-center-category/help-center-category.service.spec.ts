import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterCategoryService } from './help-center-category.service';

describe('HelpCenterCategoryService', () => {
  let service: HelpCenterCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCenterCategoryService],
    }).compile();

    service = module.get<HelpCenterCategoryService>(HelpCenterCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
