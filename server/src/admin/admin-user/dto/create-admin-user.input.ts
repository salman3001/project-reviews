import { InputType, Field, Int } from '@nestjs/graphql';
import { AdminUser } from '@prisma/client';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@InputType()
export class CreateAdminUserInput
  implements Omit<AdminUser, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field(() => String)
  @IsNotEmpty()
  firstName: string;

  @Field(() => String)
  @IsNotEmpty()
  lastName: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @Matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
  password: string;

  @Field(() => Boolean)
  @IsNotEmpty()
  isActive: boolean;

  @Field(() => Int, { nullable: true })
  roleId: number;

  @Field(() => Int, { nullable: true })
  avatarId: number | null;

  @Field(() => GraphQLUpload, { nullable: true })
  avatar: string;
}
