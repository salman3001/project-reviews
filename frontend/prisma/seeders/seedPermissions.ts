import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const permissions = [
  {
    id: 1,
    name: 'CREATE USER',
  },
  {
    id: 2,
    name: 'EDIT USER',
  },
  {
    id: 3,
    name: 'DELETE USER',
  },
];

export const seedPermissions = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  for (let i = 0; i < permissions.length; i++) {
    const permission = permissions[i];
    await prisma.permission.upsert({
      where: { id: permission.id },
      update: { name: permission.name },
      create: { id: permission.id, name: permission.name },
    });
  }
};
