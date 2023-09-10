import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSupportTicketMessageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
