import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { KnexModule } from 'nest-knexjs';
import knexConfigs from '../../database/knexfile';

@Module({
  imports: [
    KnexModule.forRoot({
      config: knexConfigs,
    }),
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
