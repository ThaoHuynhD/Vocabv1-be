import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VocabsService {
    constructor(private readonly prisma: PrismaService) {}
  
    async getAll() {
      return this.prisma.vocab_table.findMany({
        include: {
          vocab_anto_table: true,
          vocab_syn_table: true,
          vocab_rela_table: true,
        },
      });
    }
  }
