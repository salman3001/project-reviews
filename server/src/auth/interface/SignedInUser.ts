import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({})
class user {
  @Field()
  userId: number;
  @Field()
  firstName?: string;
  @Field()
  lastName?: string;
  @Field()
  email: string;
  @Field()
  userType: 'admin' | 'consumer';
  @Field()
  role?: string;

  @Field(() => [String])
  permissions?: string[];
}

@ObjectType({})
export class SignedInUser {
  @Field()
  token: string;

  @Field()
  user: user;
}
