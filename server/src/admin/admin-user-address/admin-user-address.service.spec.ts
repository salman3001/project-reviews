import { Test, TestingModule } from '@nestjs/testing';
import { AdminUserAddressService } from './admin-user-address.service';

describe('AdminUserAddressService', () => {
  let service: AdminUserAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminUserAddressService],
    }).compile();

    service = module.get<AdminUserAddressService>(AdminUserAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
