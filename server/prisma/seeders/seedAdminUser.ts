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
  Promise.all(
    adminusers.map((user) => prisma.adminUser.create({ data: user })),
  );
};
