import { InputType, Int, Field } from '@nestjs/graphql';
import { State as S } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateStateInput implements Omit<S, 'id'> {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  countryId: number | null;

  @Field(() => Boolean)
  @IsOptional()
  isActive: boolean;
}
