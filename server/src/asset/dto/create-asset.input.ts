import { InputType, Field, Int } from '@nestjs/graphql';
import { Asset } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import Upload from 'graphql-upload/Upload.mjs';

@InputType()
export class CreateAssetInput implements Omit<Asset, 'id' | 'url'> {
  @Field()
  @IsNotEmpty()
  type: string;

  @Field(() => GraphQLUpload)
  @IsNotEmpty()
  files: Promise<Upload>[];

  @Field(() => Int, { nullable: true })
  userId: number | null;

  @Field(() => Int, { nullable: true })
  adminUserId: number | null;
}
