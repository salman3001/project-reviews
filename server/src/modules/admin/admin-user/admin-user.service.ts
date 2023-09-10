import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminUserInput } from './dto/create-admin-user.input';
import { UpdateAdminUserInput } from './dto/update-admin-user.input';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { hashSync } from 'bcrypt';
import { ImageService } from '@root/src/modules/image/image.service';
import { SocialService } from '../social/social.service';

@Injectable()
export class AdminUserService {
  constructor(
    private Prisma: PrismaService,
    private imageService: ImageService,
    private socialService: SocialService,
  ) {}
  async create(createAdminUserInput: CreateAdminUserInput) {
    const { avatar, createAddressInput, createSocialInput, password, ...rest } =
      createAdminUserInput;

    const hashedPassword = hashSync(password, 12);

    const emailExist = await this.Prisma.adminUser.findUnique({
      where: { email: rest.email },
      select: { email: true },
    });

    if (emailExist) {
      throw new HttpException('Email already exist', HttpStatus.NOT_ACCEPTABLE);
    }

    const createdUser = await this.Prisma.adminUser.create({
      data: {
        password: hashedPassword,
        ...rest,
      },
    });

    if (avatar) {
      const image = await this.imageService.create({
        file: avatar,
      });
      this.Prisma.adminUser.update({
        where: {
          id: createdUser.id,
        },
        data: {
          avatar: {
            connect: { id: image.id },
          },
        },
      });
    }

    if (createSocialInput) {
      const social = await this.Prisma.social.create({
        data: {
          facebook: 'salman',
        },
      });

      this.Prisma.adminUser.update({
        where: {
          id: createdUser.id,
        },
        data: {
          Social: {
            connect: { id: social.id },
          },
        },
      });
    }

    if (createAddressInput) {
      const address = await this.Prisma.address.create({
        data: createAddressInput,
      });

      this.Prisma.adminUser.update({
        where: {
          id: createdUser.id,
        },
        data: {
          address: {
            connect: { id: address.id },
          },
        },
      });
    }

    return this.Prisma.adminUser.findUnique({ where: { id: createdUser.id } });
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

  async findAdminUserByRole(roleId: number) {
    return await this.Prisma.adminUser.findMany({
      where: {
        role: { id: roleId },
      },
    });
  }
}
