import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address as a } from '@prisma/client';

@ObjectType()
export class Address implements a {
  @Field(() => String)
  id: number;

  @Field(() => String)
  address: string | null;

  @Field(() => Int, { nullable: true })
  cityId: number | null;

  @Field(() => Int, { nullable: true })
  stateId: number | null;

  @Field(() => Int, { nullable: true })
  countryId: number | null;

  @Field(() => String)
  zip: string | null;

  @Field(() => Int, { nullable: true })
  adminUserId: number | null;
}
