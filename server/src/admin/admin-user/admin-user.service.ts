import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminUserInput } from './dto/create-admin-user.input';
import { UpdateAdminUserInput } from './dto/update-admin-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class AdminUserService {
  constructor(private Prisma: PrismaService) {}
  async create(createAdminUserInput: CreateAdminUserInput) {
    const { email, firstName, isActive, lastName, roleId, password } =
      createAdminUserInput;

    const hashedPassword = hashSync(password, 12);

    const emailExist = await this.Prisma.adminUser.findUnique({
      where: { email },
      select: { email: true },
    });
    console.log(emailExist);
    if (emailExist) {
      throw new HttpException('Email already exist', HttpStatus.NOT_ACCEPTABLE);
    }

    return await this.Prisma.adminUser.create({
      data: {
        email,
        firstName,
        lastName,
        isActive,
        roleId,
        password: hashedPassword,
      },
    });
  }

  async findAll() {
    const users = await this.Prisma.adminUser.findMany();
    return users;
  }

  async findOne(id: number) {
    return await this.Prisma.adminUser.findUnique({ where: { id: id } });
  }

  async update(id: number, updateAdminUserInput: UpdateAdminUserInput) {
    const { email, firstName, password, isActive, lastName, roleId } =
      updateAdminUserInput;

    if (password) {
      const hashedPassword = hashSync(password, 12);
      return await this.Prisma.adminUser.update({
        where: { id },
        data: {
          email,
          firstName,
          lastName,
          roleId,
          isActive,
          password: hashedPassword,
        },
      });
    }
    return await this.Prisma.adminUser.update({
      where: { id },
      data: {
        email,
        firstName,
        lastName,
        roleId,
        isActive,
      },
    });
  }

  async remove(id: number) {
    return await this.Prisma.adminUser.delete({ where: { id } });
  }
}
