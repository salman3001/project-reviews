import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PermissionService } from '../permission/permission.service';

@Module({
  providers: [RoleResolver, RoleService, PermissionService],
})
export class RoleModule {}
