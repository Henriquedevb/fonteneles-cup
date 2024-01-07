import { Injectable, ConflictException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserSchema } from './schemas/create-user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserSchema: CreateUserSchema): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmailOrUsername({
      username: createUserSchema.username,
      email: createUserSchema.email,
    });

    if (userAlreadyExists.length) {
      throw new ConflictException('Username or email already exists.');
    }

    const data = {
      ...createUserSchema,
      password: await bcrypt.hash(createUserSchema.password, 10),
    };

    const userCreated = await this.userRepository.create(data);

    return {
      ...userCreated,
      password: undefined,
    };
  }

  async findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
