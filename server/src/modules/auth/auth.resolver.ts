import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AdminSininInput } from './dto/AdminSininInput.dto';
import { SignedInUser } from './interface/SignedInUser';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignedInUser)
  adminSignIn(@Args('adminSigninInput') adminSigninInput: AdminSininInput) {
    return this.authService.adminSignin(
      adminSigninInput.email,
      adminSigninInput.password,
    );
  }
}
