import { Controller, Post, Body } from '@nestjs/common';
import { CreateTweetDTO } from './tweet.dto';

import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('tweets')
export class TweetsController {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}
  
  @Post()
  addTweet(@Body() tweet: CreateTweetDTO): Promise<Tweet> {
    return this.tweetRepository.save(tweet);
  }
}
