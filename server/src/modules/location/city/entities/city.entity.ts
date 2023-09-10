import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City as c } from '@prisma/client';

@ObjectType()
export class City implements c {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  stateId: number | null;

  @Field(() => Boolean)
  isActive: boolean;
}
