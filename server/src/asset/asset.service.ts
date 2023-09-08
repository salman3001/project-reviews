import { Injectable } from '@nestjs/common';
import { UpdateAssetInput } from './dto/update-asset.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssetTypes } from './interface/assetTypes';
import { GQLFile } from './interface/GQLFile';
import { GraphQLError } from 'graphql';
import { extname } from 'path';
import { createWriteStream } from 'fs';

@Injectable()
export class AssetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    type: AssetTypes,
    file: GQLFile,
    description?: string,
    adminUserId?: number,
    userId?: number,
  ) {
    const url = await this.uploadFile(file);
    return await this.prisma.asset.create({
      data: {
        type,
        url,
        description,
        adminUserId,
        userId,
      },
    });
  }

  async findAll() {
    return await this.prisma.asset.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.asset.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateAssetInput: UpdateAssetInput) {
    return await `This action updates a #${id} asset`;
  }

  async remove(id: number) {
    return await this.prisma.asset.delete({
      where: {
        id,
      },
    });
  }

  async findAdminUserAssets(adminUserId: number) {
    return await this.prisma.asset.findMany({
      where: {
        adminUserId,
      },
    });
  }

  validateImageFIle(file: GQLFile) {
    const validImageMimes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
    ];

    if (validImageMimes.includes(file.mimetype)) {
      return true;
    }

    return false;
  }

  async uploadFile(file: GQLFile): Promise<string> {
    const fileName = `${Date.now()}${extname(file.filename)}`;
    const filePath = `public/images/${fileName}`;

    const stream = file.createReadStream();
    const writeStream = createWriteStream(filePath);

    stream.pipe(writeStream);

    stream.on('end', () => {
      return filePath;
    });
    stream.on('error', () => {
      throw new GraphQLError('Failed to upload file');
    });

    return filePath;
  }
}
