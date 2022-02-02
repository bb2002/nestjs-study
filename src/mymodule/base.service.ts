import { ServiceA } from './aaaaa.service';
import { Inject } from '@nestjs/common';

export class BaseService {
  @Inject(ServiceA) private readonly serviceAFromP: ServiceA;
  constructor(private readonly serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello world base!';
  }

  doSomeFuncFromA(): string {
    return this.serviceAFromP.getHello();
  }
}
