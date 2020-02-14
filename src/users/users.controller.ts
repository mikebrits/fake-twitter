import { Controller, Get, Post, Put, Req, Param, Body, UsePipes } from '@nestjs/common';
import {Request} from 'express';
import { CreateUserDTO } from './users.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() req : Request): string {
    return 'Heyo! ' + JSON.stringify(req.headers);
  }

  @Get(":id")
  find(@Param() {id}) : string {
      return "User " + id;
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() user: CreateUserDTO): string {
      return "new user added " + JSON.stringify(user);
  }

  @Put()
  update(): string {
      return "user updated"
  }
}
