import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const permissions = [
  {
    name: 'CREATE USER',
  },
  {
    name: 'EDIT USER',
  },
  {
    name: 'DELETE USER',
  },
];

export const seedPermissions = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  for (let i = 0; i < permissions.length; i++) {
    const permission = permissions[i];
    await prisma.permission.create({ data: { name: permission.name } });
  }
};
