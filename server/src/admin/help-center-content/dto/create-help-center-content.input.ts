import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHelpCenterContentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
