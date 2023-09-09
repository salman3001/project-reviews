require('module-alias/register');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { urlencoded, json } from 'express';
import { GraphQLErrorFilter } from './filters/custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.use(json({ limit: '50mb' }));

  app.use(graphqlUploadExpress({ maxFileSize: 20000000, maxFiles: 10 }));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce((accumulator, error) => {
          accumulator[error.property] = Object.values(error.constraints).join(
            ', ',
          );
          return accumulator;
        }, {});
        // return formatted errors being an object with properties mapping to errors
        throw new BadRequestException(formattedErrors);
      },
    }),
  );

  app.useGlobalFilters(new GraphQLErrorFilter());

  await app.listen(3000);
}
bootstrap();
