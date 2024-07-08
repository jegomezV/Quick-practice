import { Module } from '@nestjs/common';
import { UsersService } from './users-a.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
