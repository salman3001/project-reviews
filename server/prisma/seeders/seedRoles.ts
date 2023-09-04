import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const roles = [
  {
    name: 'SUPER ADMIN',
  },
  {
    name: 'REVIEWER',
  },
  {
    name: 'VENDER',
  },
];

export const seedRoles = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const addRoles = async () => {
    for (let i = 0; i < roles.length; i++) {
      const role = roles[i];
      await prisma.role.create({ data: { name: role.name } });
    }
  };

  const assignePermissions = async () => {
    const permission = await prisma.permission.findMany({
      select: { id: true },
    });

    console.log(permission);

    await prisma.role.update({
      where: { id: 1 },
      data: {
        permissions: { connect: [...permission] },
      },
    });
  };

  await addRoles();
  await assignePermissions();
};
