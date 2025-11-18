import { Module } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';

@Module({
  controllers: [QuoteController],
  providers: [QuoteService, QuoteRepository],
})
export class QuoteModule {}
