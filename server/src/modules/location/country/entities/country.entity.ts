import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country as C } from '@prisma/client';

@ObjectType()
export class Country implements C {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isActive: boolean;
}
