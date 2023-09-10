import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AdminUser as admin } from '@prisma/client';

@ObjectType()
export class AdminUser implements Omit<admin, 'password'> {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  phone: string;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Int, { nullable: true })
  roleId: number | null;

  @Field(() => Date, { nullable: true })
  lastSeen: Date | null;

  @Field(() => String, { nullable: true })
  desc: string | null;

  @Field(() => Int, { nullable: true })
  avatarId: number | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
