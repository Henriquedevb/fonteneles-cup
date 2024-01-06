import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async create(createUserDto): Promise<User> {
  //   const data = {
  //     ...createUserDto,
  //     password: await bcrypt.hash(createUserDto.password, 10),
  //   };

  //   const userCreated = await this.prismaService.user.create({ data });

  //   return {
  //     ...userCreated,
  //     password: undefined,
  //   };
  // }

  // findByEmail(email: string) {
  //   return this.prismaService.user.findUnique({
  //     where: { email },
  //   });
  // }

  async findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
