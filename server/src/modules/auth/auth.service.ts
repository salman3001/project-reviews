import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/modules/prisma/prisma.service';
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
        role: user.role.name,
        permissions: user.role.permissions.map((p) => p.name),
      };
      const userToReturn = {
        userId: user.id,
        type: 'admin', //consumer
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role.name,
        permissions: user.role.permissions.map((p) => p.name),
      };
      return {
        token: await this.jwtService.signAsync(payload),
        user: userToReturn,
      };
    }
  }
}
