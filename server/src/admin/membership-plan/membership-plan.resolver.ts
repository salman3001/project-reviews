import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MembershipPlanService } from './membership-plan.service';
import { MembershipPlan } from './entities/membership-plan.entity';
import { CreateMembershipPlanInput } from './dto/create-membership-plan.input';
import { UpdateMembershipPlanInput } from './dto/update-membership-plan.input';

@Resolver(() => MembershipPlan)
export class MembershipPlanResolver {
  constructor(private readonly membershipPlanService: MembershipPlanService) {}

  @Mutation(() => MembershipPlan)
  createMembershipPlan(@Args('createMembershipPlanInput') createMembershipPlanInput: CreateMembershipPlanInput) {
    return this.membershipPlanService.create(createMembershipPlanInput);
  }

  @Query(() => [MembershipPlan], { name: 'membershipPlan' })
  findAll() {
    return this.membershipPlanService.findAll();
  }

  @Query(() => MembershipPlan, { name: 'membershipPlan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.membershipPlanService.findOne(id);
  }

  @Mutation(() => MembershipPlan)
  updateMembershipPlan(@Args('updateMembershipPlanInput') updateMembershipPlanInput: UpdateMembershipPlanInput) {
    return this.membershipPlanService.update(updateMembershipPlanInput.id, updateMembershipPlanInput);
  }

  @Mutation(() => MembershipPlan)
  removeMembershipPlan(@Args('id', { type: () => Int }) id: number) {
    return this.membershipPlanService.remove(id);
  }
}
