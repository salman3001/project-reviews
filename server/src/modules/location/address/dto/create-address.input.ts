import { InputType, Int, Field } from '@nestjs/graphql';
import { Address as a } from '@prisma/client';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateAddressInput implements Omit<a, 'id'> {
  @Field(() => String, { nullable: true })
  @IsOptional()
  address: string | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  cityId: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  stateId: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  countryId: number | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  zip: string | null;

  @Field(() => Int)
  @IsOptional()
  adminUserId: number | null;
}
