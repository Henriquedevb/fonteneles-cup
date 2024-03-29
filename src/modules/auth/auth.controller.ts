import { AuthRequest } from './models/AuthRequest';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IsPublic } from './decorators/is-public.decorator';
import { RefreshTokenModel } from './models/RefreshToken';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @IsPublic()
  @Post('auth/refresh')
  reautenticar(@Body() body: RefreshTokenModel) {
    return this.authService.refreshToken(body);
  }
}
