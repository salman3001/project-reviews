import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { AdminUserService } from '../admin-user/admin-user.service';
import { PermissionService } from '../permission/permission.service';
import { ImageService } from '../../image/image.service';
import { SocialService } from '../social/social.service';

@Module({
  providers: [
    RoleResolver,
    RoleService,
    AdminUserService,
    PermissionService,
    ImageService,
    SocialService,
  ],
})
export class RoleModule {}
