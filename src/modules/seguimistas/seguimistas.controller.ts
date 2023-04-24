import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SeguimistasService } from './seguimistas.service';
import { SeguimistaInputSchema } from './schemas/seguimistas-input.schema';

@Controller('seguimistas')
export class SeguimistasController {
  constructor(private readonly seguimistasService: SeguimistasService) {}

  @Post()
  async create(@Body() createSeguimistaDto: SeguimistaInputSchema) {
    return this.seguimistasService.createSeguimista(createSeguimistaDto);
  }
  @Get()
  async findAllSeguimistas() {
    return this.seguimistasService.findAllSeguimistas();
  }

  @Get()
  async findSeguimistaByEmail(@Param() email: string) {
    return this.seguimistasService.findSeguimistaById(email);
  }

  @Get(':name')
  async findSeguimistaByName(@Param('name') name: string) {
    return this.seguimistasService.findSeguimistaByName(name);
  }

  @Delete(':id')
  deleteSeguimista(@Param('id') id: string) {
    return this.seguimistasService.deleteSeguimista(id);
  }
}
