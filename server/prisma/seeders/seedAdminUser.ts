import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import * as bcrypt from 'bcrypt';

const adminusers = [
  {
    id: 1,
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
  for (let i = 0; i < adminusers.length; i++) {
    const adminuser = adminusers[i];
    await prisma.adminUser.upsert({
      where: { id: adminuser.id },
      update: {
        email: adminuser.email,
        firstName: adminuser.firstName,
        lastName: adminuser.lastName,
        password: adminuser.password,
        roleId: adminuser.roleId,
        isActive: true,
      },
      create: {
        id: adminuser.id,
        email: adminuser.email,
        firstName: adminuser.firstName,
        lastName: adminuser.lastName,
        password: adminuser.password,
        roleId: adminuser.roleId,
        isActive: true,
      },
    });
  }
};
