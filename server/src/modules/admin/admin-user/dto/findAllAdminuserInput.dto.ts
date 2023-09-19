import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class FindAllAdminuserInput {
  @Field(() => Int)
  @IsNotEmpty()
  page: number;

  @Field(() => Int)
  @IsNotEmpty()
  perPage: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  search: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  sortBy: string | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  roleId: string | null;
}
