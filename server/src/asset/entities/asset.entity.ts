import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Asset as A } from '@prisma/client';

@ObjectType()
export class Asset implements A {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  type: string;

  @Field(() => String)
  url: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => Int, { nullable: true })
  adminUserId: number;

  @Field(() => Int, { nullable: true })
  userId: number;
}
