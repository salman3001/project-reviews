import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AdminUser as admin } from '@prisma/client';
import { Asset } from 'src/asset/entities/asset.entity';

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

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Int, { nullable: true })
  roleId: number;

  @Field(() => Int, { nullable: true })
  avatarId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
