import { Injectable } from '@nestjs/common';
import { CreateSupportTicketMessageInput } from './dto/create-support-ticket-message.input';
import { UpdateSupportTicketMessageInput } from './dto/update-support-ticket-message.input';

@Injectable()
export class SupportTicketMessageService {
  create(createSupportTicketMessageInput: CreateSupportTicketMessageInput) {
    return 'This action adds a new supportTicketMessage';
  }

  findAll() {
    return `This action returns all supportTicketMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supportTicketMessage`;
  }

  update(id: number, updateSupportTicketMessageInput: UpdateSupportTicketMessageInput) {
    return `This action updates a #${id} supportTicketMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} supportTicketMessage`;
  }
}
