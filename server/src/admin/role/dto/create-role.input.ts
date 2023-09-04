import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@InputType()
export class CreateRoleInput implements Omit<Role, 'id'> {
  @Field()
  name: string;
}
