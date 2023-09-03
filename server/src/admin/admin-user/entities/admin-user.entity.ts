import { AdminUser } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AdminUserEntity implements AdminUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  roleId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
