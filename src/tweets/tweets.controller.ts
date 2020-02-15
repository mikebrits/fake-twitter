import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { CreateTweetDTO } from './tweet.dto';

import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(
    private readonly tweetService:TweetsService
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  addTweet(@Req() {user}, @Body() tweet: CreateTweetDTO): Promise<Tweet> {
    return this.tweetService.create({...tweet, user});
  }
}
