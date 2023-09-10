import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';
import { Roles } from 'src/decorators/Role.decorator';

@Roles(['SUPER ADMIN'])
@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [Permission], { name: 'permissions' })
  findAll() {
    return this.permissionService.findAll();
  }

  @Query(() => Permission, { name: 'permission' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.permissionService.findOne(id);
  }
}
