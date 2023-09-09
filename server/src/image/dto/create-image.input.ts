import { InputType, Int, Field } from '@nestjs/graphql';
import { Image } from '@prisma/client';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateImageInput implements Omit<Image, 'id' | 'url' | 'url_sm'> {
  @Field(() => String)
  alt: string;

  @Field(() => GraphQLUpload)
  @IsNotEmpty()
  file: any;
}
