import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [PrismaModule],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule {}
