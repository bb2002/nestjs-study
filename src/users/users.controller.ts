import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ForbiddenException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserInfo } from './UserInfo';
import { Headers } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserEntity } from './entities/user.entity';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../decorators/User.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    const { name, email, password } = createUserDto;
    await this.usersService.createUser(name, email, password);
  }

  @Get('/email-verify')
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto) {
    const { signupVerifyToken } = verifyEmailDto;

    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    return await this.usersService.login(email, password);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserInfo(
    @Headers() headers: any,
    @Param('id') userId: string,
    @User(new ValidationPipe({ validateCustomDecorators: true }))
    user: UserInfo,
  ): Promise<UserEntity> {
    return this.usersService.getUserInfo(userId);
  }
}
