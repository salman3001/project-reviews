import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HelpCenterContent {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
