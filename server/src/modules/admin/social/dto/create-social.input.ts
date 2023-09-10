import { InputType, Int, Field } from '@nestjs/graphql';
import { Social as S } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateSocialInput implements Omit<S, 'id'> {
  @Field(() => String)
  @IsOptional()
  website: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  facebook: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  twitter: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  instagrame: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  pintrest: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  vk: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  whatsapp: string | null;

  @Field(() => Int)
  @IsNotEmpty()
  adminUserId: number;
}
