import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminUserAddressService } from './admin-user-address.service';
import { AdminUserAddress } from './entities/admin-user-address.entity';
import { CreateAdminUserAddressInput } from './dto/create-admin-user-address.input';
import { UpdateAdminUserAddressInput } from './dto/update-admin-user-address.input';

@Resolver(() => AdminUserAddress)
export class AdminUserAddressResolver {
  constructor(private readonly adminUserAddressService: AdminUserAddressService) {}

  @Mutation(() => AdminUserAddress)
  createAdminUserAddress(@Args('createAdminUserAddressInput') createAdminUserAddressInput: CreateAdminUserAddressInput) {
    return this.adminUserAddressService.create(createAdminUserAddressInput);
  }

  @Query(() => [AdminUserAddress], { name: 'adminUserAddress' })
  findAll() {
    return this.adminUserAddressService.findAll();
  }

  @Query(() => AdminUserAddress, { name: 'adminUserAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminUserAddressService.findOne(id);
  }

  @Mutation(() => AdminUserAddress)
  updateAdminUserAddress(@Args('updateAdminUserAddressInput') updateAdminUserAddressInput: UpdateAdminUserAddressInput) {
    return this.adminUserAddressService.update(updateAdminUserAddressInput.id, updateAdminUserAddressInput);
  }

  @Mutation(() => AdminUserAddress)
  removeAdminUserAddress(@Args('id', { type: () => Int }) id: number) {
    return this.adminUserAddressService.remove(id);
  }
}
