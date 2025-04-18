import { Module } from '@nestjs/common';
import { VocabsController } from './vocabs.controller';
import { VocabService } from './vocabs.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [VocabService, PrismaService],
  controllers: [VocabsController]
})
export class VocabsModule {}
