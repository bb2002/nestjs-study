import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MymoduleModule } from './mymodule/mymodule.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsersModule, MymoduleModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
