import { Field, ObjectType } from '@nestjs/graphql';
import { AdminUser as admin } from '@prisma/client';

@ObjectType()
export class AdminUser implements Omit<admin, 'password'> {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  isActive: boolean;

  @Field()
  roleId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
