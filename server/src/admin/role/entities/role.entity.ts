import { ObjectType, Field } from '@nestjs/graphql';
import { Role as R } from '@prisma/client';
import { AdminUser } from 'src/admin/admin-user/entities/admin-user.entity';
import { Permission } from 'src/admin/permission/entities/permission.entity';

@ObjectType()
export class Role implements R {
  @Field()
  id: number;

  @Field()
  name: string;

  // @Field(() => [Permission], { nullable: true })
  // Permission?: Permission[];

  // @Field(() => [AdminUser], { nullable: true })
  // AdminUser?: AdminUser[];
}
