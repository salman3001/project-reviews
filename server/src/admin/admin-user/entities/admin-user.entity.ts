import { Field, ObjectType } from '@nestjs/graphql';
import { AdminUser as admin } from '@prisma/client';
import { Role } from 'src/admin/role/entities/role.entity';

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
