import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pegination {
  @Field(() => Int)
  count: number;
}
