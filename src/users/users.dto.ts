import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  Length,
  Min,
  IsEmail,
  IsArray,
} from 'class-validator';
import { Tweet } from 'src/tweets/tweet.entity';

export class CreateUserDTO {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  name?: string;

  @IsString()
  @Length(6)
  password:string;

  @IsString({ message: 'User handle not provided' })
  @Length(3, 15)
  handle: string;

  @IsString({ message: 'User email not provided' })
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  @Min(13)
  age?: number;

  @IsBoolean({ message: 'User must be identified as over 18 or not' })
  over18: boolean;

  @IsOptional()
  @IsArray()
  tweets?: Tweet[] = [];
}
