import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async forgotPasswordEmail(to: string) {
    const user = await this.prisma.adminUser.findFirst({
      where: {
        email: to,
      },
    });

    if (!user) throw new GraphQLError('This email doesnt exist');
    const token = this.jwtService.sign({ userId: user.id });

    try {
      await this.mailerService.sendMail({
        to,
        from: this.config.get('supportTeamEmail'),
        subject: 'Forgot Password',
        template: 'forgotPassword',
        context: {
          userName: user.firstName,
          link: `www.frontend.com/forgotpasswordLink/----${token}`,
        },
      });
    } catch (error) {
      console.log(error);

      throw new GraphQLError('Error sending email');
    }
  }

  async sendEmailVarifyEmail(to: string) {
    const user = await this.prisma.adminUser.findFirst({
      where: {
        email: to,
      },
    });

    if (!user) throw new GraphQLError('This email doesnt exist');
    const token = this.jwtService.sign({ userId: user.id });

    try {
      await this.mailerService.sendMail({
        to,
        from: 'salman@gmail.com',
        subject: 'Varify Email ID',
        template: 'forgotPassword',
        context: {
          userName: user.firstName,
          link: `www.frontend.com/forgotpasswordLink/----${token}`,
        },
      });
    } catch (error) {
      throw new GraphQLError('Error sending email');
    }
  }
}
