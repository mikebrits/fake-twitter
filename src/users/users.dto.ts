import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  Length,
  Min,
  IsEmail,
  IsArray,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Tweet } from 'src/tweets/tweet.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  @ApiPropertyOptional({
    description: 'The users chosen name. Can include surname or not.',
  })
  name?: string;

  @IsString()
  @Length(6)
  @ApiProperty({
    description: 'The password for the account',
    minLength: 6,
  })
  password: string;

  @IsString({ message: 'User handle not provided' })
  @Length(3, 15)
  @ApiProperty({
    description: 'The handle for the user, excluding the @ sign',
    minLength: 3,
    maxLength: 15,
  })
  handle: string;

  @IsString({ message: 'User email not provided' })
  @IsEmail()
  @ApiProperty({
    description: 'The email associated with the account. This is used to login',
  })
  email: string;

  @IsOptional()
  @IsNumber()
  @Min(13)
  @ApiPropertyOptional({
    description: "The user's age",
    type: Number,
  })
  age?: number;

  @IsBoolean({ message: 'User must be identified as over 18 or not' })
  @ApiProperty({
    description: 'A boolean confirming that the user is over 18',
    type: Boolean,
  })
  over18: boolean;

  @IsOptional()
  @IsArray()
  tweets?: Tweet[] = [];
}

export class AddFriendDTO {
  @IsUUID()
  friendId: string;
}
