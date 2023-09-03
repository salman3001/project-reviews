import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateAdminUserDto {
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
