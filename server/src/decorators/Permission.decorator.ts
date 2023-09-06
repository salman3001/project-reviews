import { Reflector } from '@nestjs/core';
import { PermissionTypes } from 'src/auth/interface/PermissionTypes';

export const Permission = Reflector.createDecorator<PermissionTypes>();
