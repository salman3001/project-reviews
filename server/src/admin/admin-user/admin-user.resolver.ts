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

@Roles(['SUPER ADMIN'])
@Resolver(() => AdminUser)
export class AdminUserResolver {
  constructor(
    private readonly adminUserService: AdminUserService,
    private readonly roleService: RoleService,
  ) {}

  @Mutation(() => AdminUser)
  createAdminUser(
    @Args('createAdminUserInput') createAdminUserInput: CreateAdminUserInput,
  ) {
    return this.adminUserService.create(createAdminUserInput);
  }

  @Query(() => [AdminUser], { name: 'adminUsers' })
  findAll() {
    return this.adminUserService.findAll();
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

  @ResolveField(() => Role, { nullable: true })
  async role(@Parent() adminUser: AdminUser) {
    const { id } = adminUser;
    return this.roleService.findRoleByUserId(id);
  }
}
