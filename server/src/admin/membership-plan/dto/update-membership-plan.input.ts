import { CreateMembershipPlanInput } from './create-membership-plan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMembershipPlanInput extends PartialType(CreateMembershipPlanInput) {
  @Field(() => Int)
  id: number;
}
