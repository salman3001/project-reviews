import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHelpCenterCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
