import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssetService } from './asset.service';
import { Asset } from './entities/asset.entity';
import { UpdateAssetInput } from './dto/update-asset.input';

@Resolver(() => Asset)
export class AssetResolver {
  constructor(private readonly assetService: AssetService) {}

  @Query(() => [Asset], { name: 'asset' })
  findAll() {
    return this.assetService.findAll();
  }

  @Query(() => Asset, { name: 'asset' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assetService.findOne(id);
  }

  @Mutation(() => Asset)
  updateAsset(@Args('updateAssetInput') updateAssetInput: UpdateAssetInput) {
    return this.assetService.update(updateAssetInput.id, updateAssetInput);
  }

  @Mutation(() => Asset)
  removeAsset(@Args('id', { type: () => Int }) id: number) {
    return this.assetService.remove(id);
  }
}
