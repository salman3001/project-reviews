import { InputType, Field } from '@nestjs/graphql';
import { HelpCenterCategory as H } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateHelpCenterCategoryInput implements Omit<H, 'id'> {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  slug: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaTitle: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaKeywords: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metaDesc: string | null;

  @Field(() => String)
  @IsNotEmpty()
  languageId: number;
}
