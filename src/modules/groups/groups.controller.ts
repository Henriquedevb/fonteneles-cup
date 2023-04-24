import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupInputSchema } from './schemas/group-input.schema';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() data: GroupInputSchema) {
    return this.groupsService.create(data);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}
