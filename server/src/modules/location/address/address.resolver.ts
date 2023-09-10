import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly AddressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput')
    createAddressInput: CreateAddressInput,
  ) {
    return this.AddressService.create(createAddressInput);
  }

  @Query(() => [Address])
  findAllAddress() {
    return this.AddressService.findAll();
  }

  @Query(() => Address)
  findOneAddress(@Args('id', { type: () => Int }) id: number) {
    return this.AddressService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(
    @Args('updateAddressInput')
    updateAddressInput: UpdateAddressInput,
  ) {
    return this.AddressService.update(
      updateAddressInput.id,
      updateAddressInput,
    );
  }

  @Mutation(() => Address)
  removeAddress(@Args('id', { type: () => Int }) id: number) {
    return this.AddressService.remove(id);
  }
}
