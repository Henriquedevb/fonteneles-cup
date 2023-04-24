import { Module } from '@nestjs/common';
import { SeguimistasController } from './seguimistas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeguimistasService } from './seguimistas.service';

@Module({
  imports: [PrismaModule],
  controllers: [SeguimistasController],
  providers: [SeguimistasService],
  exports: [SeguimistasService],
})
export class SeguimistasModule {}
