import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
