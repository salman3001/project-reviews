import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterContentResolver } from './help-center-content.resolver';
import { HelpCenterContentService } from './help-center-content.service';

describe('HelpCenterContentResolver', () => {
  let resolver: HelpCenterContentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCenterContentResolver, HelpCenterContentService],
    }).compile();

    resolver = module.get<HelpCenterContentResolver>(HelpCenterContentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
