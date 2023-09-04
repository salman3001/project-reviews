import { Module } from '@nestjs/common';
import { AdminUserModule } from './admin-user/admin-user.module';
import { RoleModule } from './role/role.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [AdminUserModule, RoleModule, PrismaModule, PermissionModule],
})
export class AdminModule {}
