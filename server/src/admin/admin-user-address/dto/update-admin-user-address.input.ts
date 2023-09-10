import { CreateAdminUserAddressInput } from './create-admin-user-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminUserAddressInput extends PartialType(CreateAdminUserAddressInput) {
  @Field(() => Int)
  id: number;
}
