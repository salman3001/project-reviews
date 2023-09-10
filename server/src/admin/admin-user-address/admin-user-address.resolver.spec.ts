import { Test, TestingModule } from '@nestjs/testing';
import { AdminUserAddressResolver } from './admin-user-address.resolver';
import { AdminUserAddressService } from './admin-user-address.service';

describe('AdminUserAddressResolver', () => {
  let resolver: AdminUserAddressResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminUserAddressResolver, AdminUserAddressService],
    }).compile();

    resolver = module.get<AdminUserAddressResolver>(AdminUserAddressResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
