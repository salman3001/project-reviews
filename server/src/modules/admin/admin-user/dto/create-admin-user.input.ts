import { InputType, Field, Int } from '@nestjs/graphql';
import { AdminUser } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { CreateSocialInput } from '../../social/dto/create-social.input';
import { GQLFile } from '@root/src/types/GQLFile';
import { CreateAddressInput } from '@root/src/modules/location/address/dto/create-address.input';

@InputType()
export class CreateAdminUserInput
  implements
    Omit<
      AdminUser,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'avatarId'
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

  @Field(() => Int, { nullable: true })
  @IsOptional()
  roleId: number | null;

  @Field(() => GraphQLUpload, { nullable: true })
  @IsOptional()
  avatar: GQLFile;

  @Field(() => CreateAddressInput, { nullable: true })
  @IsOptional()
  createAddressInput: CreateAddressInput;

  @Field(() => CreateSocialInput, { nullable: true })
  @IsOptional()
  createSocialInput: CreateSocialInput;
}
