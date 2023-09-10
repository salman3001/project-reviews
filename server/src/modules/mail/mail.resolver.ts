import { Args, Query, Resolver } from '@nestjs/graphql';
import { MailService } from './mail.service';

@Resolver()
export class MailResolver {
  constructor(private readonly mailService: MailService) {}

  @Query(() => String)
  async sendForgotPasswordEmail(
    @Args('to', { type: () => String }) to: string,
  ) {
    await this.mailService.forgotPasswordEmail(to);
    return 'Success';
  }

  @Query(() => String)
  async sendVarificationEmail(@Args('to', { type: () => String }) to: string) {
    await this.mailService.sendEmailVarifyEmail(to);
    return {};
  }
}
