import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserResolver } from './admin-user.resolver';
import { AddressModule } from '../../location/address/address.module';
import { ImageModule } from '../../image/image.module';
import { RoleModule } from '../role/role.module';
import { SocialModule } from '../social/social.module';

@Module({
  imports: [AddressModule, ImageModule, RoleModule, SocialModule],
  providers: [AdminUserResolver, AdminUserService],
})
export class AdminUserModule {}
