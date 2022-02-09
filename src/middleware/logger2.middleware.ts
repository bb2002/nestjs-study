import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Logger2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void): any {
    console.log('Request 2 in...');
    next();
  }
}
