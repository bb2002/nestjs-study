import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailModule } from '../email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [EmailModule, TypeOrmModule.forFeature([UserEntity]), AuthModule],
})
export class UsersModule {}
