import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HelpCenterContentService } from './help-center-content.service';
import { HelpCenterContent } from './entities/help-center-content.entity';
import { CreateHelpCenterContentInput } from './dto/create-help-center-content.input';
import { UpdateHelpCenterContentInput } from './dto/update-help-center-content.input';

@Resolver(() => HelpCenterContent)
export class HelpCenterContentResolver {
  constructor(private readonly helpCenterContentService: HelpCenterContentService) {}

  @Mutation(() => HelpCenterContent)
  createHelpCenterContent(@Args('createHelpCenterContentInput') createHelpCenterContentInput: CreateHelpCenterContentInput) {
    return this.helpCenterContentService.create(createHelpCenterContentInput);
  }

  @Query(() => [HelpCenterContent], { name: 'helpCenterContent' })
  findAll() {
    return this.helpCenterContentService.findAll();
  }

  @Query(() => HelpCenterContent, { name: 'helpCenterContent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helpCenterContentService.findOne(id);
  }

  @Mutation(() => HelpCenterContent)
  updateHelpCenterContent(@Args('updateHelpCenterContentInput') updateHelpCenterContentInput: UpdateHelpCenterContentInput) {
    return this.helpCenterContentService.update(updateHelpCenterContentInput.id, updateHelpCenterContentInput);
  }

  @Mutation(() => HelpCenterContent)
  removeHelpCenterContent(@Args('id', { type: () => Int }) id: number) {
    return this.helpCenterContentService.remove(id);
  }
}
