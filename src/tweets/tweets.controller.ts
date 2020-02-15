import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { CreateTweetDTO } from './tweet.dto';

import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('tweets')
export class TweetsController {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  addTweet(@Req() {user}, @Body() tweet: CreateTweetDTO): Promise<Tweet> {
    
    return this.tweetRepository.save({...tweet, user});
  }
}
