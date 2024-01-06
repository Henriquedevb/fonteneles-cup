import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @IsPublic()
  // @Post()
  // create(@Body() createUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Get()
  @IsPublic()
  findAllUsers() {
    return this.userService.findUsers();
  }

  // @Get(':email')
  // findByEmail(@Param('email') email: string) {
  //   return this.userService.findByEmail(email);
  // }
}
