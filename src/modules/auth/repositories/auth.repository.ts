import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

import { InjectConnection } from 'nest-knexjs';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(@InjectConnection() private knex: Knex) {}

  async findByEmail(email: string) {
    const query = await this.knex<User>('users')
      .select('*')
      .where('email', email);

    return query;
  }
}
