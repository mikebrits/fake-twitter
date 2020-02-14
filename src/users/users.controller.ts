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

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  findAll(@Req() req: Request): Promise<User[]> {
    return this.userRepository.find();
  }

  @Get(':id')
  find(@Param() { id }): Promise<User> {
    return this.userRepository.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Param() {id}, @Body() user: CreateUserDTO): Promise<User> {
    return this.userRepository.save({id, ...user});
  }

  @Put(":id")
  update(@Param() {id}, @Body() user: CreateUserDTO): Promise<User> {
    return this.userRepository.save({id, ...user});
  }

  @Delete(":id")
  async remove(@Param() {id}) : Promise<void>{
    await this.userRepository.delete(id);
  }
}
