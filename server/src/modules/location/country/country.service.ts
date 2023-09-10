import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCountryInput: CreateCountryInput) {
    return this.prisma.country.create({ data: createCountryInput });
  }

  findAll() {
    return this.prisma.country.findMany();
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({ where: { id } });
  }

  update(id: number, updateCountryInput: UpdateCountryInput) {
    return this.prisma.country.update({
      where: { id },
      data: updateCountryInput,
    });
  }

  remove(id: number) {
    return this.prisma.country.delete({ where: { id } });
  }
}
