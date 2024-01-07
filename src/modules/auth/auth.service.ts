import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { UnauthorizedError } from './errors/unauthorized.error';
import { AccessTokenModel } from './models/AccessToken';
import { RefreshTokenModel } from './models/RefreshToken';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { AuthRepository } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authRepository: AuthRepository,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      usernameOrEmail: user.usernameOrEmail,
      sub: user.id,
    };

    const { access_token } = await this.generateJwtToken(payload);
    const { refresh_token } = await this.generateRefreshToken({
      usernameOrEmail: payload.usernameOrEmail,
    });

    return {
      access_token,
      refresh_token,
    };
  }

  async refreshToken({
    refresh_token,
  }: RefreshTokenModel): Promise<AccessTokenModel> {
    try {
      const decoded = await this.verifyRefreshToken(refresh_token);

      const user = {
        sub: decoded.id,
      };

      const { access_token } = await this.generateJwtToken(user);

      return {
        access_token,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async validateUser(usernameOrEmail: string, password: string): Promise<User> {
    const [user] = await this.authRepository.findByEmailOrUsername(
      usernameOrEmail,
    );

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError('login or password provided is incorrect.');
  }

  async generateJwtToken(payload: any): Promise<AccessTokenModel> {
    const access_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.EXPIRES_IN_TOKEN,
    });

    return { access_token };
  }

  async generateRefreshToken(payload: any): Promise<RefreshTokenModel> {
    const refresh_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
    });

    return { refresh_token };
  }

  async verifyRefreshToken(token: string): Promise<any> {
    return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
  }
}
