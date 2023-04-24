import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const userCreated = await this.prismaService.user.create({ data });

    return {
      ...userCreated,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
