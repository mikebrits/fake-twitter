import {
  Controller,
  Get,
  Post,
  Put,
  Req,
  Param,
  Body,
  UsePipes,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './users.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(@Req() req: Request): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param() { id }): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get('/email/:email')
  findByEmail(@Param() { email }): Promise<User> {
    return this.userService.findByEmail(email);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Param() { id }, @Body() user: CreateUserDTO): Promise<User> {
    return this.userService.create({ id, ...user });
  }

  @Put(':id')
  update(@Param() { id }, @Body() user: CreateUserDTO): Promise<User> {
    return this.userService.create({ id, ...user });
  }

  @Delete(':id')
  async remove(@Param() { id }): Promise<void> {
    await this.userService.remove(id);
  }
}
