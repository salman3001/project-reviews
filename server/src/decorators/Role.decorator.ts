import { Reflector } from '@nestjs/core';
import { Permissions } from 'src/auth/interface/Permissions';
import { RolesTypes } from 'src/auth/interface/RolesTypes';

interface RoleOptions {
  userType: 'admin' | 'user';
  role: RolesTypes;
  Permissions: Permissions[];
}

export const Roles = Reflector.createDecorator<RoleOptions>();
