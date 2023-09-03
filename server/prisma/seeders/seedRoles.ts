import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const roles = [
  {
    name: 'super_admin',
  },
  {
    name: 'reviewer',
  },
  {
    name: 'vender',
  },
];

export const seedRoles = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  Promise.all(roles.map((role) => prisma.role.create({ data: role })));
};
