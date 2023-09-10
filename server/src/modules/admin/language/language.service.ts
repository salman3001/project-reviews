import { Injectable } from '@nestjs/common';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class LanguageService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLanguageInput: CreateLanguageInput) {
    return this.prisma.language.create({ data: createLanguageInput });
  }

  findAll() {
    return this.prisma.language.findMany();
  }

  findOne(id: number) {
    return this.prisma.language.findUnique({ where: { id } });
  }

  update(id: number, updateLanguageInput: UpdateLanguageInput) {
    return this.prisma.language.update({
      where: { id },
      data: updateLanguageInput,
    });
  }

  remove(id: number) {
    return this.prisma.language.delete({ where: { id } });
  }
}
