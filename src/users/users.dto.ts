import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateUserDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  handle: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsBoolean()
  over18: boolean;
}
