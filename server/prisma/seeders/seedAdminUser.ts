import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import * as bcrypt from 'bcrypt';

const adminusers = [
  {
    firstName: 'salman',
    lastName: 'khan',
    email: 'salman@gmail.com',
    password: bcrypt.hashSync('123456789', 10),
    roleId: 1,
    isActive: true,
  },
];

export const seedAdminUsers = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  adminusers.forEach(async (user) => {
    await prisma.adminUser.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        roleId: user.roleId,
      },
    });
  });
};
