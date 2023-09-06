import { Reflector } from '@nestjs/core';
import { RolesTypes } from 'src/auth/interface/RolesTypes';

export const Roles = Reflector.createDecorator<RolesTypes[]>();
