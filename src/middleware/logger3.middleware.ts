import { Response, Request, NextFunction } from 'express';

export function logger3Middleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Request 3 in...');
  next();
}
