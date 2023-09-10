import { Module } from '@nestjs/common';
import { HelpCenterCategoryService } from './help-center-category.service';
import { HelpCenterCategoryResolver } from './help-center-category.resolver';

@Module({
  providers: [HelpCenterCategoryResolver, HelpCenterCategoryService],
})
export class HelpCenterCategoryModule {}
