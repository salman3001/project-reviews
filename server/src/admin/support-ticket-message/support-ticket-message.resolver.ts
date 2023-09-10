import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupportTicketMessageService } from './support-ticket-message.service';
import { SupportTicketMessage } from './entities/support-ticket-message.entity';
import { CreateSupportTicketMessageInput } from './dto/create-support-ticket-message.input';
import { UpdateSupportTicketMessageInput } from './dto/update-support-ticket-message.input';

@Resolver(() => SupportTicketMessage)
export class SupportTicketMessageResolver {
  constructor(private readonly supportTicketMessageService: SupportTicketMessageService) {}

  @Mutation(() => SupportTicketMessage)
  createSupportTicketMessage(@Args('createSupportTicketMessageInput') createSupportTicketMessageInput: CreateSupportTicketMessageInput) {
    return this.supportTicketMessageService.create(createSupportTicketMessageInput);
  }

  @Query(() => [SupportTicketMessage], { name: 'supportTicketMessage' })
  findAll() {
    return this.supportTicketMessageService.findAll();
  }

  @Query(() => SupportTicketMessage, { name: 'supportTicketMessage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supportTicketMessageService.findOne(id);
  }

  @Mutation(() => SupportTicketMessage)
  updateSupportTicketMessage(@Args('updateSupportTicketMessageInput') updateSupportTicketMessageInput: UpdateSupportTicketMessageInput) {
    return this.supportTicketMessageService.update(updateSupportTicketMessageInput.id, updateSupportTicketMessageInput);
  }

  @Mutation(() => SupportTicketMessage)
  removeSupportTicketMessage(@Args('id', { type: () => Int }) id: number) {
    return this.supportTicketMessageService.remove(id);
  }
}
