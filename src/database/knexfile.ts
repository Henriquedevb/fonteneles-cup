import { ConfigService } from '@nestjs/config';
import { Knex } from 'knex';
import * as path from 'path';
import 'dotenv/config';

const configService = new ConfigService();

const knexConfigs: Knex.Config = {
  client: 'pg',
  connection: {
    host: configService.get<string>('DATABASE_HOST'),
    user: configService.get<string>('POSTGRES_USER'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    database: configService.get<string>('POSTGRES_DATABASE'),
    pool: {
      testOnBorrow: true,
      min: 1,
      max: 1,
    },
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'migrations'),
  },
  seeds: {
    timestampFilenamePrefix: false,
    directory: path.join(__dirname, 'seeds'),
  },
};

export default Object.freeze(knexConfigs);
