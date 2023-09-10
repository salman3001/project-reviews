import { InputType, Field } from '@nestjs/graphql';
import { Country as C } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCountryInput implements Omit<C, 'id'> {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => Boolean)
  @IsOptional()
  isActive: boolean;
}
