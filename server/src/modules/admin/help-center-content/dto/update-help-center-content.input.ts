import { IsNotEmpty } from 'class-validator';
import { CreateHelpCenterContentInput } from './create-help-center-content.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHelpCenterContentInput extends PartialType(
  CreateHelpCenterContentInput,
) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
