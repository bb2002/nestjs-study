import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailModule } from '../email/email.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [EmailModule],
})
export class UsersModule {}
