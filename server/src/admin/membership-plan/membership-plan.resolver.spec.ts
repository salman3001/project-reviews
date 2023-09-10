import { Test, TestingModule } from '@nestjs/testing';
import { MembershipPlanResolver } from './membership-plan.resolver';
import { MembershipPlanService } from './membership-plan.service';

describe('MembershipPlanResolver', () => {
  let resolver: MembershipPlanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembershipPlanResolver, MembershipPlanService],
    }).compile();

    resolver = module.get<MembershipPlanResolver>(MembershipPlanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
