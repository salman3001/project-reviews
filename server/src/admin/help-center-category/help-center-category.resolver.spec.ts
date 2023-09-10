import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterCategoryResolver } from './help-center-category.resolver';
import { HelpCenterCategoryService } from './help-center-category.service';

describe('HelpCenterCategoryResolver', () => {
  let resolver: HelpCenterCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCenterCategoryResolver, HelpCenterCategoryService],
    }).compile();

    resolver = module.get<HelpCenterCategoryResolver>(HelpCenterCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
