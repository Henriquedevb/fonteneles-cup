import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SeguimistaInputSchema } from './schemas/seguimistas-input.schema';
import { Seguimistas } from '@prisma/client';

@Injectable()
export class SeguimistasService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSeguimista(createSeguimista: SeguimistaInputSchema) {
    const seguimista = await this.prismaService.seguimistas.create({
      data: createSeguimista,
    });
    return seguimista;
  }

  async findAllSeguimistas() {
    const seguimistas = await this.prismaService.seguimistas.findMany();
    const participations = await this.prismaService.participations.findMany();
    const groups = await this.prismaService.groups.findMany();

    const newAllSeguimistas = seguimistas.map((seguimista) => {
      const participationsBySeguimista = participations.filter(
        (participation) => participation.seguimista_id === seguimista.id,
      );

      const groupsBySeguimista = participationsBySeguimista.map(
        (participation) => {
          const group = groups.find(
            (group) => group.id === participation.group_id,
          );

          return group;
        },
      );

      return {
        ...seguimista,
        groups: groupsBySeguimista,
        participations: participationsBySeguimista,
      };
    });

    return newAllSeguimistas;
  }

  async findSeguimistaById(email: string) {
    return this.prismaService.seguimistas.findMany({
      where: {
        email,
      },
    });
  }

  async findSeguimistaByName(name: string): Promise<Seguimistas[]> {
    const results = await this.prismaService.seguimistas.findMany({
      where: {
        full_name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });

    return results;
  }

  deleteSeguimista(id: string) {
    return this.prismaService.seguimistas.delete({
      where: {
        id,
      },
    });
  }
}
