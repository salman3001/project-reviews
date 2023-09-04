import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoleInput: CreateRoleInput) {
    const { name } = createRoleInput;
    return await this.prisma.role.create({ data: { name } });
  }

  async findAll() {
    return await this.prisma.role.findMany();
  }

  async findOne(id: number) {
    return this.prisma.role.findFirst({ where: { id } });
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    return await this.prisma.role.update({
      where: { id },
      data: { name: updateRoleInput.name },
    });
  }

  async remove(id: number) {
    return await this.prisma.role.delete({ where: { id } });
  }

  async findRoleByUserId(id: number) {
    return await this.prisma.role.findFirst({
      where: { AdminUser: { some: { id } } },
    });
  }

  async assignePermissions(roleId: number, permisionIds: number[]) {
    const permissionObj = permisionIds.map((p) => ({ id: p }));
    await this.prisma.role.update({
      where: { id: roleId },
      data: {
        permissions: {
          set: [],
        },
      },
    });

    return await this.prisma.role.update({
      where: { id: roleId },
      data: {
        permissions: { connect: [...permissionObj] },
      },
    });
  }
}
