import { Injectable } from '@nestjs/common';
import { CreateHelpCenterCategoryInput } from './dto/create-help-center-category.input';
import { UpdateHelpCenterCategoryInput } from './dto/update-help-center-category.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class HelpCenterCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createHelpCenterCategoryInput: CreateHelpCenterCategoryInput) {
    return this.prisma.helpCenterCategory.create({
      data: createHelpCenterCategoryInput,
    });
  }

  findAll() {
    return this.prisma.helpCenterCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.helpCenterCategory.findUnique({ where: { id } });
  }

  update(
    id: number,
    updateHelpCenterCategoryInput: UpdateHelpCenterCategoryInput,
  ) {
    return this.prisma.helpCenterCategory.update({
      where: { id },
      data: updateHelpCenterCategoryInput,
    });
  }

  remove(id: number) {
    return this.prisma.helpCenterCategory.delete({ where: { id } });
  }
}
