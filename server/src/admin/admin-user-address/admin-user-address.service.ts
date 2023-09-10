import { Injectable } from '@nestjs/common';
import { CreateAdminUserAddressInput } from './dto/create-admin-user-address.input';
import { UpdateAdminUserAddressInput } from './dto/update-admin-user-address.input';

@Injectable()
export class AdminUserAddressService {
  create(createAdminUserAddressInput: CreateAdminUserAddressInput) {
    return 'This action adds a new adminUserAddress';
  }

  findAll() {
    return `This action returns all adminUserAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUserAddress`;
  }

  update(id: number, updateAdminUserAddressInput: UpdateAdminUserAddressInput) {
    return `This action updates a #${id} adminUserAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUserAddress`;
  }
}
