import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async forgotPasswordEmail(to: string) {
    console.log('ran');
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
        subject: 'Greeting from NestJS NodeMailer',
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
