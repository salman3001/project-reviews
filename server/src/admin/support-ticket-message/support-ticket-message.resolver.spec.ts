import { Test, TestingModule } from '@nestjs/testing';
import { SupportTicketMessageResolver } from './support-ticket-message.resolver';
import { SupportTicketMessageService } from './support-ticket-message.service';

describe('SupportTicketMessageResolver', () => {
  let resolver: SupportTicketMessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportTicketMessageResolver, SupportTicketMessageService],
    }).compile();

    resolver = module.get<SupportTicketMessageResolver>(SupportTicketMessageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
