import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    console.log(createUserDto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto) {
    console.log(verifyEmailDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log(loginUserDto);
  }

  @Get(':id')
  findOne(@Param('id') userId: string) {
    console.log(`GET /${userId}`);
  }
}
