import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({})
class permisions {
  @Field()
  name: string;
}

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
  userType: 'admin' | 'web';
  @Field()
  role?: string;

  @Field(() => [permisions])
  permissions?: permisions[];
}

@ObjectType({})
export class SignedInUser {
  @Field()
  token: string;

  @Field()
  user: user;
}
