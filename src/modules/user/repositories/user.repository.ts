import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { User } from '../entities/user.entity';
import { InjectConnection } from 'nest-knexjs';
import { CreateUserSchema } from '../schemas/create-user.schema';

type queryEmailOrUsername = {
  username?: string;
  email?: string;
};
@Injectable()
export class UserRepository {
  constructor(@InjectConnection() private knex: Knex) {}

  async find(): Promise<User[]> {
    const query = this.knex<User>('users');

    return query;
  }

  async findByEmailOrUsername({ username, email }: queryEmailOrUsername) {
    const query = await this.knex<User>('users')
      .select('*')
      .where('email', email)
      .orWhere('username', username);

    return query;
  }

  async create(user: CreateUserSchema): Promise<User> {
    const [createdUser] = await this.knex<User>('users')
      .insert(user)
      .returning('*');

    return createdUser;
  }
}
