import { Injectable } from '@nestjs/common';
import { CreateHelpCenterContentInput } from './dto/create-help-center-content.input';
import { UpdateHelpCenterContentInput } from './dto/update-help-center-content.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class HelpCenterContentService {
  constructor(private readonly prisma: PrismaService) {}
  create(createHelpCenterContentInput: CreateHelpCenterContentInput) {
    return this.prisma.helpCenterContent.create({
      data: createHelpCenterContentInput,
    });
  }

  findAll() {
    return this.prisma.helpCenterContent.findMany();
  }

  findOne(id: number) {
    return this.prisma.helpCenterContent.findUnique({ where: { id } });
  }

  update(
    id: number,
    updateHelpCenterContentInput: UpdateHelpCenterContentInput,
  ) {
    return this.prisma.helpCenterContent.update({
      where: { id },
      data: updateHelpCenterContentInput,
    });
  }

  remove(id: number) {
    return this.prisma.helpCenterContent.delete({ where: { id } });
  }
}
