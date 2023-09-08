import { Module } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserResolver } from './admin-user.resolver';
import { RoleService } from '../role/role.service';
import { AssetService } from 'src/asset/asset.service';

@Module({
  providers: [AdminUserResolver, AdminUserService, RoleService, AssetService],
})
export class AdminUserModule {}
