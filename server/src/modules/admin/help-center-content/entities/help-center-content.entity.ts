import { ObjectType, Field, Int } from '@nestjs/graphql';
import { HelpCenterContent as H } from '@prisma/client';

@ObjectType()
export class HelpCenterContent implements H {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  slug: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  metaTitle: string | null;

  @Field(() => String)
  metaKeywords: string | null;

  @Field(() => String)
  metaDesc: string | null;

  @Field(() => Int)
  helpCenterCategoryId: number;

  @Field(() => Int)
  languageId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
