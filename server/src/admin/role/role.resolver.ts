import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Permission } from '../permission/entities/permission.entity';
import { AdminUser } from '../admin-user/entities/admin-user.entity';
import { AdminUserService } from '../admin-user/admin-user.service';
import { PermissionService } from '../permission/permission.service';

@Resolver(() => Role)
export class RoleResolver {
  constructor(
    private readonly roleService: RoleService,
    private readonly adminUserService: AdminUserService,
    private readonly permissionService: PermissionService,
  ) {}

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.remove(id);
  }

  @Mutation(() => Role)
  assignPermissions(
    @Args('roleId', { type: () => Int }) roleId: number,
    @Args('permissionIds', { type: () => [Int] }) permisionIds: number[],
  ) {
    return this.roleService.assignePermissions(roleId, permisionIds);
  }

  @ResolveField(() => [Permission], { nullable: true })
  async Permissions(@Parent() role: Role) {
    const { id } = role;
    return this.permissionService.findByRoleId(id);
  }

  @ResolveField(() => [AdminUser], { nullable: true })
  async adminUsers(@Parent() role: Role) {
    return this.adminUserService.findAdminUserByRole(role.id);
  }
}
