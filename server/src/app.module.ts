import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AdminModule } from './modules/admin/admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import appConfigue from 'src/config/app.configue';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailModule } from './modules/mail/mail.module';
import { ImageModule } from './modules/image/image.module';
import { LocationModule } from './modules/location/location.module';

console.log(join(__dirname, '/templates'));

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfigue] }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('mail.host'),
          port: config.get('mail.host'),
          secure: false,
          auth: {
            user: config.get('mail.user'),
            pass: config.get('mail.pass'),
          },
        },
        defaults: {
          from: 'No Reply <Support@projectreviews.com>',
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    PrismaModule,
    AdminModule,
    MailModule,
    ImageModule,
    LocationModule,
  ],
  providers: [PrismaService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
