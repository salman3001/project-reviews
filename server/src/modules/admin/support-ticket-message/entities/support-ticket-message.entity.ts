import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SupportTicketMessage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
