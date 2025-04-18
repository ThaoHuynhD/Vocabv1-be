import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VocabService {
    constructor(private readonly prisma: PrismaService) {}
  
    async getAll() {
      return this.prisma.vocab_table.findMany();
    }
  }
