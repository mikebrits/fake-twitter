import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';


@Module({
  providers: [AuthService],
  imports: []
})
export class AuthModule {}
