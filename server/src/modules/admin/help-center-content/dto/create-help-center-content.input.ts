import { InputType, Int, Field } from '@nestjs/graphql';
import { HelpCenterContent as H } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateHelpCenterContentInput
  implements Omit<H, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  slug: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  content: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaTitle: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaKeywords: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaDesc: string | null;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  helpCenterCategoryId: number;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  languageId: number;
}
