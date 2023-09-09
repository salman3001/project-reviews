import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { GQLFile } from '../types/GQLFile';
import { createWriteStream, existsSync, mkdirSync, unlinkSync } from 'fs';
import { extname, join, posix, resolve } from 'path';
import { GraphQLError } from 'graphql';
import * as sharp from 'sharp';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}
  async create(createImageInput: CreateImageInput) {
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
        alt: createImageInput.alt,
      },
    });
  }

  findAll() {
    return `This action returns all image`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageInput: UpdateImageInput) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
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
    const filePath = join('public', outPutpath, `${Date.now()}.webp`);
    const filePathSm = join('public', outPutpath, `${Date.now()}-sm.webp`);

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

    unlinkSync(resolve(imagePath));

    return {
      url,
      url_sm,
    };
  }
}
