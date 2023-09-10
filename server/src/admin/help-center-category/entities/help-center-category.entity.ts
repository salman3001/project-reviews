import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HelpCenterCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
