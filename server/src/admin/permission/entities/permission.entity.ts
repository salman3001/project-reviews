import { ObjectType, Field } from '@nestjs/graphql';
import { permission as p } from '@prisma/client';

@ObjectType()
export class Permission implements p {
  @Field()
  id: number;

  @Field()
  name: string;
}
