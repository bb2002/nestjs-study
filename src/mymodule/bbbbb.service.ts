import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';
import { ServiceA } from './aaaaa.service';

@Injectable()
export class ServiceB extends BaseService {
  constructor(private readonly _serviceA: ServiceA) {
    super(_serviceA);
  }

  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
