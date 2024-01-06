import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { User } from '../entities/user.entity';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class UserRepository {
  constructor(@InjectConnection() private knex: Knex) {}

  async find(): Promise<User[]> {
    const query = this.knex<User>('users');

    return query;
  }
}
