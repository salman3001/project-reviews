import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRoleInput implements Omit<Role, 'id'> {
  @Field()
  @IsNotEmpty()
  name: string;
}
