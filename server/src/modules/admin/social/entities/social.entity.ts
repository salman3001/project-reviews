import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Social as S } from '@prisma/client';

@ObjectType()
export class Social implements S {
  @Field(() => Int)
  id: number;
  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => String, { nullable: true })
  facebook: string;

  @Field(() => String, { nullable: true })
  twitter: string;

  @Field(() => String, { nullable: true })
  instagrame: string;

  @Field(() => String, { nullable: true })
  pintrest: string;

  @Field(() => String, { nullable: true })
  vk: string;

  @Field(() => String, { nullable: true })
  whatsapp: string;

  @Field(() => Int)
  adminUserId: number;
}
