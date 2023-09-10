import { Injectable } from '@nestjs/common';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCityInput: CreateCityInput) {
    return this.prisma.city.create({ data: createCityInput });
  }

  findAll() {
    return this.prisma.city.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityInput: UpdateCityInput) {
    return this.prisma.city.update({ where: { id }, data: updateCityInput });
  }

  remove(id: number) {
    return this.prisma.city.delete({ where: { id } });
  }
}
