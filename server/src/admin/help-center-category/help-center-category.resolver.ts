import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HelpCenterCategoryService } from './help-center-category.service';
import { HelpCenterCategory } from './entities/help-center-category.entity';
import { CreateHelpCenterCategoryInput } from './dto/create-help-center-category.input';
import { UpdateHelpCenterCategoryInput } from './dto/update-help-center-category.input';

@Resolver(() => HelpCenterCategory)
export class HelpCenterCategoryResolver {
  constructor(private readonly helpCenterCategoryService: HelpCenterCategoryService) {}

  @Mutation(() => HelpCenterCategory)
  createHelpCenterCategory(@Args('createHelpCenterCategoryInput') createHelpCenterCategoryInput: CreateHelpCenterCategoryInput) {
    return this.helpCenterCategoryService.create(createHelpCenterCategoryInput);
  }

  @Query(() => [HelpCenterCategory], { name: 'helpCenterCategory' })
  findAll() {
    return this.helpCenterCategoryService.findAll();
  }

  @Query(() => HelpCenterCategory, { name: 'helpCenterCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helpCenterCategoryService.findOne(id);
  }

  @Mutation(() => HelpCenterCategory)
  updateHelpCenterCategory(@Args('updateHelpCenterCategoryInput') updateHelpCenterCategoryInput: UpdateHelpCenterCategoryInput) {
    return this.helpCenterCategoryService.update(updateHelpCenterCategoryInput.id, updateHelpCenterCategoryInput);
  }

  @Mutation(() => HelpCenterCategory)
  removeHelpCenterCategory(@Args('id', { type: () => Int }) id: number) {
    return this.helpCenterCategoryService.remove(id);
  }
}
