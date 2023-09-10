import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MembershipPlan {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
