import { Module } from '@nestjs/common';
import { MymoduleController } from './mymodule.controller';
import { ServiceB } from './bbbbb.service';
import { ServiceA } from './aaaaa.service';

@Module({
  controllers: [MymoduleController],
  providers: [ServiceA, ServiceB],
  imports: [],
})
export class MymoduleModule {}
