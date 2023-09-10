import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AdminUserAddress as a } from '@prisma/client';

@ObjectType()
export class AdminUserAddress implements a {
  @Field(() => String)
  id: number;

  @Field(() => String)
  address: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  zip: string;

  @Field(() => Int)
  adminUserId: number;
}
