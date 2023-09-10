import { Module } from '@nestjs/common';
import { MembershipPlanService } from './membership-plan.service';
import { MembershipPlanResolver } from './membership-plan.resolver';

@Module({
  providers: [MembershipPlanResolver, MembershipPlanService],
})
export class MembershipPlanModule {}
