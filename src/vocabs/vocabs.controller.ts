import { Controller, Get } from '@nestjs/common';
import { VocabsService } from './vocabs.service';

@Controller('vocabs')
export class VocabsController {
  constructor(private readonly vocabService: VocabsService) {}

  @Get('')
  getAll() {
    return this.vocabService.getAll();
  }
}
