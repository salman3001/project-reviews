import { InputType, Field, Int } from '@nestjs/graphql';
import { AdminUser } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { CreateAdminUserAddressInput } from '../../admin-user-address/dto/create-admin-user-address.input';
import { CreateSocialInput } from '../../social/dto/create-social.input';

@InputType()
export class CreateAdminUserInput
  implements
    Omit<
      AdminUser,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'avatarId'
      | 'roleId'
      | 'membershipPlanId'
      | 'lastSeen'
    >
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

  @Field(() => Int)
  @IsNotEmpty()
  phone: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  desc: string;

  @Field()
  @Matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
  password: string;

  @Field(() => Boolean)
  @IsNotEmpty()
  isActive: boolean;

  @Field(() => GraphQLUpload, { nullable: true })
  @IsOptional()
  avatar: GraphQLUpload;

  @Field(() => CreateAdminUserAddressInput, { nullable: true })
  @IsOptional()
  createAdminUserAddressInput: CreateAdminUserAddressInput;

  @Field(() => CreateSocialInput, { nullable: true })
  @IsOptional()
  createSocialInput: CreateSocialInput;
}
