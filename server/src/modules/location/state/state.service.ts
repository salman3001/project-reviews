import { Injectable } from '@nestjs/common';
import { CreateStateInput } from './dto/create-state.input';
import { UpdateStateInput } from './dto/update-state.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class StateService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStateInput: CreateStateInput) {
    return this.prisma.state.create({ data: createStateInput });
  }

  findAll() {
    return this.prisma.state.findMany();
  }

  findOne(id: number) {
    return this.prisma.state.findUnique({ where: { id } });
  }

  update(id: number, updateStateInput: UpdateStateInput) {
    return this.prisma.state.update({ where: { id }, data: updateStateInput });
  }

  remove(id: number) {
    return this.prisma.state.delete({ where: { id } });
  }
}
