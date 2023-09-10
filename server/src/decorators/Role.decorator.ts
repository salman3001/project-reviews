import { Reflector } from '@nestjs/core';
import { RolesTypes } from 'src/modules/auth/interface/RolesTypes';

export const Roles = Reflector.createDecorator<RolesTypes[]>();
