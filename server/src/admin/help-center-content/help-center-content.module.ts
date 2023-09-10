import { Module } from '@nestjs/common';
import { HelpCenterContentService } from './help-center-content.service';
import { HelpCenterContentResolver } from './help-center-content.resolver';

@Module({
  providers: [HelpCenterContentResolver, HelpCenterContentService],
})
export class HelpCenterContentModule {}
