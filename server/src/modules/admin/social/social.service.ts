import { Injectable } from '@nestjs/common';
import { CreateSocialInput } from './dto/create-social.input';
import { UpdateSocialInput } from './dto/update-social.input';
import { PrismaService } from '@root/src/modules/prisma/prisma.service';

@Injectable()
export class SocialService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSocialInput: CreateSocialInput) {
    return this.prisma.social.create({ data: createSocialInput });
  }

  findAll() {
    return this.prisma.social.findMany();
  }

  findOne(id: number) {
    return this.prisma.social.findUnique({ where: { id } });
  }

  update(id: number, updateSocialInput: UpdateSocialInput) {
    return this.prisma.social.update({
      where: { id },
      data: updateSocialInput,
    });
  }

  remove(id: number) {
    return this.prisma.social.delete({ where: { id } });
  }
}
