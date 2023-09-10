import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const languages = [
  {
    id: 1,
    name: 'English',
  },
  {
    id: 2,
    name: 'Arabic',
  },
];

export const seedLanguages = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    await prisma.language.upsert({
      where: { id: language.id },
      update: {
        id: language.id,
        name: language.name,
      },
      create: {
        id: language.id,
        name: language.name,
      },
    });
  }
};
