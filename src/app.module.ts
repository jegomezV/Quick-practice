import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users-a/users-a.module';

@Module({
  imports: [UsersModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
