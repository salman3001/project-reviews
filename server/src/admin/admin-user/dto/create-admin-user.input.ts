import { InputType, Field } from '@nestjs/graphql';
import { AdminUser } from '@prisma/client';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

@InputType()
export class CreateAdminUserInput
  implements Omit<AdminUser, 'id' | 'createdAt' | 'updatedAt'>
{
  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @Matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
  password: string;

  @Field()
  @IsNotEmpty()
  isActive: boolean;

  @Field()
  roleId: number;
}
