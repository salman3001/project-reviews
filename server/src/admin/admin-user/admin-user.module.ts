import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserResolver } from './admin-user.resolver';
import { RoleService } from '../role/role.service';
import { ImageService } from '@root/src/image/image.service';

@Module({
  providers: [AdminUserResolver, AdminUserService, RoleService, ImageService],
})
export class AdminUserModule {}
