import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { extname, join, posix, resolve } from 'path';
import { GraphQLError } from 'graphql';
import * as sharp from 'sharp';
import { PrismaService } from '../prisma/prisma.service';
import { unlink } from 'fs/promises';
import { GQLFile } from '@root/src/types/GQLFile';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}
  async create(createImageInput: CreateImageInput) {
    const isFileValid = this.validateImageFIle(createImageInput.file);

    if (!isFileValid) throw new GraphQLError('Invalid image formate');

    const uploadedFilePqath = await this.uploadImage(
      createImageInput.file,
      join('images'),
    );
    const { url, url_sm } = await this.generateWebP(
      uploadedFilePqath,
      join('images'),
    );

    return this.prisma.image.create({
      data: {
        url,
        url_sm,
      },
    });
  }

  findAll() {
    return this.prisma.image.findMany();
  }

  async findOne(id: number) {
    const image = await this.prisma.image.findUnique({
      where: {
        id,
      },
    });

    return image;
  }

  async update(id: number, updateImageInput: UpdateImageInput) {
    const oldImage = await this.prisma.image.findUnique({
      where: { id },
      select: {
        url: true,
        url_sm: true,
      },
    });

    if (updateImageInput?.file) {
      const { file, ...rest } = updateImageInput;
      const isFileValid = await this.validateImageFIle(file);
      if (!isFileValid) throw new GraphQLError('Invalid image file');
      try {
        await this.deleteImage(resolve(join('public', oldImage.url)));
        await this.deleteImage(resolve(join('public', oldImage.url_sm)));
      } catch (error) {
        console.log('failed to delete old image');
      }

      const uploadedFilePath = await this.uploadImage(
        updateImageInput.file,
        join('images'),
      );
      const { url, url_sm } = await this.generateWebP(
        uploadedFilePath,
        join('images'),
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      return this.prisma.image.update({
        where: {
          id,
        },
        data: { url, url_sm, ...rest },
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { file, ...rest } = updateImageInput;
    return this.prisma.image.update({
      where: {
        id,
      },
      data: { ...rest },
    });
  }

  async remove(id: number) {
    const image = await this.prisma.image.findUnique({ where: { id } });
    if (!image) throw new GraphQLError('Record not found');
    try {
      await this.deleteImage(resolve(join('public', image.url)));
      await this.deleteImage(resolve(join('public', image.url_sm)));
    } catch (error) {
      console.log('failed to delete old image');
    }

    return this.prisma.image.delete({ where: { id } });
  }

  async validateImageFIle(file: GQLFile) {
    const { mimetype } = await file;
    const validImageMimes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
    ];

    if (validImageMimes.includes(mimetype)) {
      return true;
    }
    return false;
  }

  async uploadImage(image: GQLFile, path: string): Promise<string> {
    const { createReadStream, filename } = await image;

    const AfileName = `${Date.now()}${extname(filename)}`;

    const outPutpath = join('public', path);

    if (!existsSync(outPutpath)) {
      mkdirSync(outPutpath, { recursive: true });
    }

    const filePath = join('public', path, AfileName);

    const stream = createReadStream();
    const writeStream = createWriteStream(filePath);

    stream.pipe(writeStream);

    return new Promise((res, rej) => {
      stream.on('end', () => {
        res(filePath);
      });

      stream.on('error', () => {
        rej(() => {
          throw new GraphQLError('Failed to upload file');
        });
      });
    });
  }

  async generateWebP(imagePath: string, outPutpath: string) {
    const sufix = `${Date.now()}`;
    const filePath = join('public', outPutpath, `${sufix}.webp`);
    const filePathSm = join('public', outPutpath, `${sufix}-sm.webp`);

    const url = posix.join(outPutpath, `${Date.now()}.webp`);
    const url_sm = posix.join(outPutpath, `${Date.now()}-sm.webp`);

    try {
      await sharp(resolve(imagePath)).resize(400).webp().toFile(filePath);
      console.log('1 file converted to webp');
    } catch (error) {
      console.warn('1 file failed to covert to webp');
      console.log(error);
    }

    try {
      await sharp(imagePath).resize(400).webp().toFile(filePathSm);
      console.log('1 file converted to webp');
    } catch (error) {
      console.warn('1 file failed to covert to webp');
      console.log(error);
    }

    try {
      await this.deleteImage(resolve(imagePath));
    } catch (error) {
      throw new GraphQLError(
        'Failed to delete the temp image, But images uploaded successfully',
      );
    }

    return {
      url,
      url_sm,
    };
  }

  deleteImage(path: string): Promise<void> {
    return unlink(resolve(path));
  }
}
