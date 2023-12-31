import { IsNotEmpty } from 'class-validator';
import { CreateSupportTicketMessageInput } from './create-support-ticket-message.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSupportTicketMessageInput extends PartialType(
  CreateSupportTicketMessageInput,
) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
