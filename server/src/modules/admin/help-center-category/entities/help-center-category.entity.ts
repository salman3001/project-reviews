import { ObjectType, Field, Int } from '@nestjs/graphql';
import { HelpCenterCategory as H } from '@prisma/client';

@ObjectType()
export class HelpCenterCategory implements H {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  slug: string;

  @Field(() => String)
  metaTitle: string | null;

  @Field(() => String)
  metaKeywords: string | null;

  @Field(() => String)
  metaDesc: string | null;

  @Field(() => Int)
  languageId: number;
}
