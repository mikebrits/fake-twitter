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
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './users.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
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

  @Put()
  update(@Req() { user }, @Body() fields: CreateUserDTO): Promise<User> {
    return this.userService.update({ id: user.id, ...fields });
  }

  @Delete(':id')
  async remove(@Param() { id }): Promise<void> {
    await this.userService.remove(id);
  }
}
