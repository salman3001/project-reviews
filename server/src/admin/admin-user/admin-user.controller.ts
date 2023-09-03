import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { AdminUserEntity } from './entities/admin-user.entity';

@Controller('admin-user')
@ApiTags('Admin-user')
export class AdminUserController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Post()
  @ApiCreatedResponse({ type: AdminUserEntity })
  create(@Body() createAdminUserDto: CreateAdminUserDto) {
    return this.adminUserService.create(createAdminUserDto);
  }

  @Get()
  @ApiOkResponse({ type: AdminUserEntity, isArray: true })
  findAll() {
    return this.adminUserService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AdminUserEntity })
  findOne(@Param('id') id: string) {
    return this.adminUserService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AdminUserEntity })
  update(
    @Param('id') id: string,
    @Body() updateAdminUserDto: UpdateAdminUserDto,
  ) {
    return this.adminUserService.update(+id, updateAdminUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AdminUserEntity })
  remove(@Param('id') id: string) {
    return this.adminUserService.remove(+id);
  }
}
