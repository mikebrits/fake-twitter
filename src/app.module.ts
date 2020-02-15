import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
