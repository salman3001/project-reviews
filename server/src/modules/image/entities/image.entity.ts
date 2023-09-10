import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Image as Im } from '@prisma/client';

@ObjectType()
export class Image implements Im {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  alt: string;

  @Field(() => String)
  url_sm: string;

  @Field(() => String)
  url: string;
}
