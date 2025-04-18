import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { VocabsModule } from './vocabs/vocabs.module';

@Module({
  imports: [PrismaModule, VocabsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
