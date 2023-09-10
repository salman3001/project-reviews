import { InputType, Field } from '@nestjs/graphql';
import { Image } from '@prisma/client';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateImageInput implements Omit<Image, 'id' | 'url' | 'url_sm'> {
  @Field(() => String)
  @IsOptional()
  alt: string;

  @Field(() => GraphQLUpload)
  @IsNotEmpty()
  file: any;
}
