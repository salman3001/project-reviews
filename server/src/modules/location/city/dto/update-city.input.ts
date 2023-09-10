import { IsNotEmpty } from 'class-validator';
import { CreateCityInput } from './create-city.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
