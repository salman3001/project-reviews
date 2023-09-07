import { InputType, Field, Int } from '@nestjs/graphql';
import { Asset } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@InputType()
export class CreateAssetInput implements Omit<Asset, 'id' | 'url'> {
  @Field()
  @IsNotEmpty()
  type: string;

  @Field(() => GraphQLUpload)
  @IsNotEmpty()
  files: Promise<FileUpload>[];
  @Field(() => Int, { nullable: true })
  userId: number | null;

  @Field(() => Int, { nullable: true })
  adminUserId: number | null;
}
