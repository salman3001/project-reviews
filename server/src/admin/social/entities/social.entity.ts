import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Social {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
