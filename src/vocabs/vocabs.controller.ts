import { Controller, Get } from '@nestjs/common';
import { VocabService } from './vocabs.service';

@Controller('vocabs')
export class VocabsController {
  constructor(private readonly vocabService: VocabService) {}

  @Get('')
  getAll() {
    return this.vocabService.getAll();
  }
}
