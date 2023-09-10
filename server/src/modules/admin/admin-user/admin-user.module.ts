import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserResolver } from './admin-user.resolver';
import { RoleService } from '../role/role.service';
import { SocialService } from '../social/social.service';
import { ImageService } from '../../image/image.service';

@Module({
  providers: [
    AdminUserResolver,
    AdminUserService,
    ImageService,
    RoleService,
    SocialService,
  ],
})
export class AdminUserModule {}
