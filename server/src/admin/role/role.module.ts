import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { AdminUserService } from '../admin-user/admin-user.service';
import { PermissionService } from '../permission/permission.service';

@Module({
  providers: [RoleResolver, RoleService, AdminUserService, PermissionService],
})
export class RoleModule {}
