import { InputType, Int, Field } from '@nestjs/graphql';
import { Language as L } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateLanguageInput implements Omit<L, 'id'> {
  @Field(() => Int)
  @IsNotEmpty()
  name: string;
}
