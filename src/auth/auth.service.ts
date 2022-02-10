import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../users/entities/user.entity';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = '918a45a408984e56bd907c9654d13ef0';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  async login(user: UserEntity) {
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1d',
      audience: 'gakpok.io',
      issuer: 'gakpok.io',
    });
  }

  async verify(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, JWT_SECRET) as (
        | jwt.JwtPayload
        | string
      ) &
        User;
      const { id, email } = payload;

      return {
        userId: id,
        email,
      };
    } catch (ex) {
      throw new UnauthorizedException();
    }
  }
}
