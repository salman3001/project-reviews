import { InputType, Int, Field } from '@nestjs/graphql';
import { City as c } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCityInput implements Omit<c, 'id'> {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => Int)
  @IsOptional()
  stateId: number | null;

  @Field(() => Boolean)
  @IsOptional()
  isActive: boolean;
}
