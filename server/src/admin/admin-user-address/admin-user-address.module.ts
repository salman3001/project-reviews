import { Module } from '@nestjs/common';
import { AdminUserAddressService } from './admin-user-address.service';
import { AdminUserAddressResolver } from './admin-user-address.resolver';

@Module({
  providers: [AdminUserAddressResolver, AdminUserAddressService],
})
export class AdminUserAddressModule {}
