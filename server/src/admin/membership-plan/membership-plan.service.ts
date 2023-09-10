import { Injectable } from '@nestjs/common';
import { CreateMembershipPlanInput } from './dto/create-membership-plan.input';
import { UpdateMembershipPlanInput } from './dto/update-membership-plan.input';

@Injectable()
export class MembershipPlanService {
  create(createMembershipPlanInput: CreateMembershipPlanInput) {
    return 'This action adds a new membershipPlan';
  }

  findAll() {
    return `This action returns all membershipPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membershipPlan`;
  }

  update(id: number, updateMembershipPlanInput: UpdateMembershipPlanInput) {
    return `This action updates a #${id} membershipPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} membershipPlan`;
  }
}
