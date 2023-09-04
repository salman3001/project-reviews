import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async adminSignin(email: string, password: string) {
    const user = await this.prisma.adminUser.findUnique({
      where: { email },
      include: {
        role: {
          include: { permissions: { select: { name: true } } },
        },
      },
    });

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new GraphQLError('Invalid credentions');
      return;
    } else {
      const payload = {
        userId: user.id,
      };
      const userToReturn = {
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userType: 'admin',
        role: user.role.name,
        permissions: user.role.permissions,
      };
      return {
        token: await this.jwtService.signAsync(payload),
        user: userToReturn,
      };
    }
  }
}
