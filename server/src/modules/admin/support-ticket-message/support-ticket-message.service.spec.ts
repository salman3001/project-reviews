import { Test, TestingModule } from '@nestjs/testing';
import { SupportTicketMessageService } from './support-ticket-message.service';

describe('SupportTicketMessageService', () => {
  let service: SupportTicketMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportTicketMessageService],
    }).compile();

    service = module.get<SupportTicketMessageService>(SupportTicketMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
