import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CreateUserSchema } from './schemas/create-user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserSchema: CreateUserSchema) {
    return this.userService.create(createUserSchema);
  }

  @Get()
  findAllUsers() {
    return this.userService.findUsers();
  }
}
