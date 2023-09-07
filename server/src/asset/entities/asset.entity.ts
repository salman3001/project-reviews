import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Asset as A } from '@prisma/client';

@ObjectType()
export class Asset implements A {
  id: number;
  type: string;
  url: string;
  userId: number;
  adminUserId: number;
  exampleField: number;
}
