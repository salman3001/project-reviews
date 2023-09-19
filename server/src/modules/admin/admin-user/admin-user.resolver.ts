import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AdminUserService } from './admin-user.service';
import { AdminUser } from './entities/admin-user.entity';
import { CreateAdminUserInput } from './dto/create-admin-user.input';
import { UpdateAdminUserInput } from './dto/update-admin-user.input';
import { Role } from '../role/entities/role.entity';
import { RoleService } from '../role/role.service';
import { Roles } from 'src/decorators/Role.decorator';
import { Permission } from 'src/decorators/Permission.decorator';
import { FindAllAdminuserInput } from '@root/src/modules/admin/admin-user/dto/findAllAdminuserInput.dto';
import { AddressService } from '../../location/address/address.service';
import { Address } from '../../location/address/entities/address.entity';
import { ImageService } from '../../image/image.service';
import { Image } from '../../image/entities/image.entity';

// @Roles(['SUPER ADMIN'])
@Resolver(() => AdminUser)
export class AdminUserResolver {
  constructor(
    private readonly adminUserService: AdminUserService,
    private readonly roleService: RoleService,
    private readonly addressService: AddressService,
    private readonly imageService: ImageService,
  ) {}

  @Mutation(() => AdminUser)
  async createAdminUser(
    @Args('createAdminUserInput') createAdminUserInput: CreateAdminUserInput,
  ) {
    return await this.adminUserService.create(createAdminUserInput);
  }

  @Query(() => [AdminUser], { name: 'adminUsers' })
  findAll(@Args('findAllInput') findAllInput: FindAllAdminuserInput) {
    return this.adminUserService.findAll(findAllInput);
  }

  @Query(() => AdminUser, { name: 'adminUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminUserService.findOne(id);
  }

  @Mutation(() => AdminUser)
  updateAdminUser(
    @Args('updateAdminUserInput') updateAdminUserInput: UpdateAdminUserInput,
  ) {
    return this.adminUserService.update(
      updateAdminUserInput.id,
      updateAdminUserInput,
    );
  }

  @Mutation(() => AdminUser)
  removeAdminUser(@Args('id', { type: () => Int }) id: number) {
    return this.adminUserService.remove(id);
  }

  @Query(() => Int)
  async getAdminUserCount() {
    return this.adminUserService.getCount();
  }

  @ResolveField(() => Role, { nullable: true })
  async role(@Parent() adminUser: AdminUser) {
    const { id } = adminUser;
    return this.roleService.findRoleByUserId(id);
  }

  @ResolveField(() => Address, { nullable: true })
  async Address(@Parent() adminUser: AdminUser) {
    const { id } = adminUser;
    const address = await this.addressService.findOne(id);
    return address;
  }

  @ResolveField(() => [Image], { nullable: true })
  async Avatar(@Parent() adminUser: AdminUser) {
    const { avatarId } = adminUser;
    let image = null;
    if (avatarId) {
      image = await this.imageService.findOne(avatarId);
    }
    return image;
  }

  @ResolveField(() => Role, { nullable: true })
  async Role(@Parent() adminUser: AdminUser) {
    const { id } = adminUser;
    const role = await this.roleService.findRoleByUserId(id);
    return role;
  }
}
