import { Module } from '@nestjs/common';
import { AdminUserModule } from './admin-user/admin-user.module';
import { RoleModule } from './role/role.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PermissionModule } from './permission/permission.module';
import { AdminUserAddressModule } from './admin-user-address/admin-user-address.module';
import { SocialModule } from './social/social.module';
import { MembershipPlanModule } from './membership-plan/membership-plan.module';
import { HelpCenterContentModule } from './help-center-content/help-center-content.module';
import { HelpCenterCategoryModule } from './help-center-category/help-center-category.module';
import { LanguageModule } from './language/language.module';
import { SupportTicketMessageModule } from './support-ticket-message/support-ticket-message.module';

@Module({
  imports: [
    AdminUserModule,
    RoleModule,
    PrismaModule,
    PermissionModule,
    AdminUserAddressModule,
    SocialModule,
    MembershipPlanModule,
    HelpCenterContentModule,
    HelpCenterCategoryModule,
    LanguageModule,
    SupportTicketMessageModule,
  ],
})
export class AdminModule {}
