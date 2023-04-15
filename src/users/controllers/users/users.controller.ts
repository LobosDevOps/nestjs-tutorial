import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UseFilters,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ParseIntPipe, UseGuards } from '@nestjs/common';

import { UsersService } from '../../../users/services/users/users.service';
import { SerializedUser } from '../../../users/types';
import { UserNotFoundException } from '../../../users/exceptions/userNotFound.exception';
import { HttpExceptionFilter } from '../../../users/filters/httpException.filter';
import { CreateUserDto } from '../../../users/dots/createUser.dto';
import { AuthenticatedGuard } from '../../../auth/utils/local-auth-guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthenticatedGuard)
  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('username/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
