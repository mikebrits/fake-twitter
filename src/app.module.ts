import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TweetController } from './tweet/tweet.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, TweetController],
  providers: [AppService],
})
export class AppModule {}
