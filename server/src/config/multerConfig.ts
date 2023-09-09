import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';

export default (
  type: 'image' | 'video',
  destination: string,
  maxFileSize: number, //size in mumbers,
): MulterOptions => {
  const allowedMimeTypes =
    type === 'image'
      ? ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
      : type === 'video' && ['video/mp4'];

  return {
    storage: diskStorage({
      destination: destination,
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
      },
    }),
    fileFilter: (req, file, cb) => {
      const isMimeTypeOk = allowedMimeTypes.includes(file.mimetype)
        ? true
        : false;
      const isFileSizeOk = file.size < maxFileSize;

      if (isMimeTypeOk && isFileSizeOk) {
        cb(null, true);
      } else {
        throw new BadRequestException('Invalid file size');
      }
    },
  };
};
