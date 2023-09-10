import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SocialService } from './social.service';
import { Social } from './entities/social.entity';
import { CreateSocialInput } from './dto/create-social.input';
import { UpdateSocialInput } from './dto/update-social.input';

@Resolver(() => Social)
export class SocialResolver {
  constructor(private readonly socialService: SocialService) {}

  @Mutation(() => Social)
  createSocial(@Args('createSocialInput') createSocialInput: CreateSocialInput) {
    return this.socialService.create(createSocialInput);
  }

  @Query(() => [Social], { name: 'social' })
  findAll() {
    return this.socialService.findAll();
  }

  @Query(() => Social, { name: 'social' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.socialService.findOne(id);
  }

  @Mutation(() => Social)
  updateSocial(@Args('updateSocialInput') updateSocialInput: UpdateSocialInput) {
    return this.socialService.update(updateSocialInput.id, updateSocialInput);
  }

  @Mutation(() => Social)
  removeSocial(@Args('id', { type: () => Int }) id: number) {
    return this.socialService.remove(id);
  }
}
