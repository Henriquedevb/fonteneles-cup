import { Injectable } from '@nestjs/common';

import { ParticipationSchema } from './schemas/participation.schema';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createParticipationDto: ParticipationSchema) {
    const seguimistas = await this.prismaService.seguimistas.findMany();
    const groups = await this.prismaService.groups.findMany();

    const createdParticipation = await this.prismaService.participations.create(
      {
        data: createParticipationDto,
      },
    );

    const participations = await this.prismaService.participations.findMany({
      where: {
        group_id: {
          equals: createParticipationDto.group_id,
        },
      },
    });

    const newParticipations = participations.map((participation) => {
      const seguimista = seguimistas.find(
        (seguimista) => seguimista.id === participation.seguimista_id,
      );

      const group = groups.find((group) => group.id === participation.group_id);

      return {
        id: participation.id,
        year: participation.year,
        seguimista,
        group,
      };
    });

    const newParticipation = newParticipations.find(
      (participation) => participation.id === createdParticipation.id,
    );

    return newParticipation;
  }

  findAll() {
    return this.prismaService.participations.findMany();
  }

  async findOne(id: string) {
    const seguimistas = await this.prismaService.seguimistas.findMany();
    const groups = await this.prismaService.groups.findMany();

    const participations = await this.prismaService.participations.findMany({
      where: {
        group_id: {
          equals: id,
        },
      },
    });

    const newParticipations = participations.map((participation) => {
      const seguimista = seguimistas.find(
        (seguimista) => seguimista.id === participation.seguimista_id,
      );

      const group = groups.find((group) => group.id === participation.group_id);

      return {
        id: participation.id,
        year: participation.year,
        seguimista,
        group,
      };
    });

    return newParticipations;
  }

  delete(id: string) {
    return this.prismaService.participations.delete({
      where: {
        id,
      },
    });
  }
}
