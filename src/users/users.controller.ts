import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.UsersService.getAllUsers();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.UsersService.createUser(newUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.UsersService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedFields: UpdateUserDto) {
    return this.UsersService.updateUser(id, updatedFields);
  }
}
