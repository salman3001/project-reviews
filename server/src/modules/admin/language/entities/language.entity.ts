import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Language as L } from '@prisma/client';

@ObjectType()
export class Language implements L {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
