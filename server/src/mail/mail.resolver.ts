import { Args, Query, Resolver } from '@nestjs/graphql';
import { MailService } from './mail.service';
import { GraphQLError } from 'graphql';

@Resolver()
export class MailResolver {
  constructor(private readonly mailService: MailService) {}

  @Query(() => String)
  async sendForgotPasswordEmail(
    @Args('to', { type: () => String }) to: string,
  ) {
    await this.mailService.forgotPasswordEmail(to);
    return 'Email Sent! Please click the link sent to your email to reset the password';
  }
}
