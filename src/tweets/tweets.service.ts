import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { CreateTweetDTO } from './tweet.dto';

@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  findAll(): Promise<Tweet[]> {
    return this.tweetRepository.find();
  }

  create(tweet: CreateTweetDTO): Promise<Tweet> {
    return this.tweetRepository.save(tweet);
  }
}
