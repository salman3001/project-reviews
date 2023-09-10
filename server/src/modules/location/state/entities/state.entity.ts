import { ObjectType, Field, Int } from '@nestjs/graphql';
import { State as S } from '@prisma/client';

@ObjectType()
export class State implements S {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  countryId: number | null;

  @Field(() => Boolean)
  isActive: boolean;
}
