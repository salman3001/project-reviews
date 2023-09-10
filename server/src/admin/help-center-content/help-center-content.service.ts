import { Injectable } from '@nestjs/common';
import { CreateHelpCenterContentInput } from './dto/create-help-center-content.input';
import { UpdateHelpCenterContentInput } from './dto/update-help-center-content.input';

@Injectable()
export class HelpCenterContentService {
  create(createHelpCenterContentInput: CreateHelpCenterContentInput) {
    return 'This action adds a new helpCenterContent';
  }

  findAll() {
    return `This action returns all helpCenterContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpCenterContent`;
  }

  update(id: number, updateHelpCenterContentInput: UpdateHelpCenterContentInput) {
    return `This action updates a #${id} helpCenterContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpCenterContent`;
  }
}
