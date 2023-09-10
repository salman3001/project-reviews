import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [AuthResolver, AuthService, ConfigService],
  imports: [
    JwtModule.registerAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('jwtKey'),
          global: true,
          signOptions: { expiresIn: '2d' },
        };
      },
    }),
  ],
  exports: [AuthService, ConfigService, JwtModule],
})
export class AuthModule {}
