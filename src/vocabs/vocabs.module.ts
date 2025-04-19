import { Module } from '@nestjs/common';
import { VocabsController } from './vocabs.controller';
import { VocabsService } from './vocabs.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [VocabsService, PrismaService],
  controllers: [VocabsController]
})
export class VocabsModule {}
