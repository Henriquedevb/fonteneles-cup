import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { SeguimistasModule } from './modules/seguimistas/seguimistas.module';
import { GroupsModule } from './modules/groups/groups.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { ParticipationsModule } from './modules/participations/participations.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    SeguimistasModule,
    GroupsModule,
    ParticipationsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
