import { InputType, Field } from '@nestjs/graphql';
import { Asset } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@InputType()
export class CreateAssetInput
  implements Omit<Asset, 'id' | 'url' | 'userId' | 'adminUserId'>
{
  @Field(() => String)
  @IsNotEmpty()
  type: string;

  @Field(() => GraphQLUpload)
  @IsNotEmpty()
  file: any;

  @Field(() => String, { nullable: true })
  description: string;
}
