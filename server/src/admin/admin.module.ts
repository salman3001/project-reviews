import { Module } from '@nestjs/common';
import { AdminUserModule } from './admin-user/admin-user.module';
import { RoleModule } from './role/role.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AdminUserModule, RoleModule, PrismaModule],
})
export class AdminModule {}
