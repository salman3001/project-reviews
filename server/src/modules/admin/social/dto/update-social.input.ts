import { IsNotEmpty } from 'class-validator';
import { CreateSocialInput } from './create-social.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialInput extends PartialType(CreateSocialInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
