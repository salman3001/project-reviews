import { ObjectType, Field } from '@nestjs/graphql';
import { Role as R } from '@prisma/client';

@ObjectType()
export class Role implements R {
  @Field()
  id: number;

  @Field()
  name: string;
}
