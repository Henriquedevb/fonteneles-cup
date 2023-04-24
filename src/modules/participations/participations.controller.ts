import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ParticipationsService } from './participations.service';
import { ParticipationSchema } from './schemas/participation.schema';

@Controller('participations')
export class ParticipationsController {
  constructor(private readonly participationsService: ParticipationsService) {}

  @Post()
  create(@Body() createParticipationDto: ParticipationSchema) {
    return this.participationsService.create(createParticipationDto);
  }

  @Get()
  findAll() {
    return this.participationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participationsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.participationsService.delete(id);
  }
}
