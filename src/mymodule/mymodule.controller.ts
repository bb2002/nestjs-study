import { Controller, Get } from '@nestjs/common';
import { ServiceB } from './bbbbb.service';

@Controller('mymodule')
export class MymoduleController {
  constructor(private readonly serviceB: ServiceB) {}

  @Get()
  getHello() {
    return this.serviceB.getHello();
  }
}
