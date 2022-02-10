import { IsEmail, IsString } from 'class-validator';

export class UserInfo {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
