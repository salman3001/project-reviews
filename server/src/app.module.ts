import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './admin/auth/auth.module';
import { AdminUserModule } from './admin/admin-user/admin-user.module';
import { RolesModule } from './admin/roles/roles.module';
import { PermissionsModule } from './admin/permissions/permissions.module';

@Module({
  imports: [AuthModule, AdminUserModule, RolesModule, PermissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
