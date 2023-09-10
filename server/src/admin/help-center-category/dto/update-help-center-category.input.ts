import { CreateHelpCenterCategoryInput } from './create-help-center-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHelpCenterCategoryInput extends PartialType(CreateHelpCenterCategoryInput) {
  @Field(() => Int)
  id: number;
}
