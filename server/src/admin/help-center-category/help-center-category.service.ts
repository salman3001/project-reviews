import { Injectable } from '@nestjs/common';
import { CreateHelpCenterCategoryInput } from './dto/create-help-center-category.input';
import { UpdateHelpCenterCategoryInput } from './dto/update-help-center-category.input';

@Injectable()
export class HelpCenterCategoryService {
  create(createHelpCenterCategoryInput: CreateHelpCenterCategoryInput) {
    return 'This action adds a new helpCenterCategory';
  }

  findAll() {
    return `This action returns all helpCenterCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpCenterCategory`;
  }

  update(id: number, updateHelpCenterCategoryInput: UpdateHelpCenterCategoryInput) {
    return `This action updates a #${id} helpCenterCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpCenterCategory`;
  }
}
