import { Injectable } from '@nestjs/common';
import { Roles } from 'src/decorators/Role.decorator';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Roles(['SUPER ADMIN'])
@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.permission.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.permission.findFirst({ where: { id } });
  }

  async findByRoleId(RoleId: number) {
    return await this.prisma.permission.findMany({
      where: { Role: { some: { id: RoleId } } },
    });
  }
}
