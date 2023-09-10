import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/decorators/Role.decorator';
import { Permission } from 'src/decorators/Permission.decorator';
import { RolesTypes } from '../modules/auth/interface/RolesTypes';
import { PermissionTypes } from '../modules/auth/interface/PermissionTypes';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private readonly role: Roles,
    private readonly reflector: Reflector,
    @Inject(ConfigService) private readonly configService,
    @Inject(JwtService) private readonly jwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const roles = this.reflector.get(Roles, ctx.getClass());

    const permission = this.reflector.get(Permission, ctx.getHandler());

    if (!permission && !roles) {
      return true;
    }

    const { req } = ctx.getContext();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException(
        'You dont have permission to access this resource. Please contact support team.',
      );
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_KEY'),
      });
      req['user'] = payload;
    } catch {
      throw new UnauthorizedException(
        'You dont have permission to access this resource. Please contact support team.',
      );
    }

    const userRole = req['user'].role as RolesTypes;
    const userPermissions = (req['user'].permissions as PermissionTypes) || [];

    if (userRole === 'SUPER ADMIN') {
      return true;
    }

    if (!roles && permission && userPermissions.includes(permission))
      return true;

    if (roles && !permission && roles.includes(userRole)) return true;
    if (
      roles &&
      permission &&
      roles.includes(userRole) &&
      userPermissions.includes(permission)
    )
      return true;
    //

    throw new UnauthorizedException(
      'You dont have permission to access this resource. Please contact support team.',
    );
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      (request.headers as any)?.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
