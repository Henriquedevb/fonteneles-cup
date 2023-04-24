import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupInputSchema } from './schemas/group-input.schema';

@Injectable()
export class GroupsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: GroupInputSchema) {
    const groupCreated = this.prismaService.groups.create({
      data,
    });

    return groupCreated;
  }

  findAll() {
    const groups = this.prismaService.groups.findMany();

    return groups;
  }

  remove(id: string) {
    const groupDeleted = this.prismaService.groups.delete({
      where: {
        id,
      },
    });

    return groupDeleted;
  }
}
