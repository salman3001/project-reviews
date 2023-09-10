import { Module } from '@nestjs/common';
import { SupportTicketMessageService } from './support-ticket-message.service';
import { SupportTicketMessageResolver } from './support-ticket-message.resolver';

@Module({
  providers: [SupportTicketMessageResolver, SupportTicketMessageService],
})
export class SupportTicketMessageModule {}
