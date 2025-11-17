import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './repositories/quote.repository';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class AppService {
  constructor(private readonly quotesRepository: QuoteRepository) {}
  getAllQuotes(): Quote[] {
    return this.quotesRepository.getQuotes();
  }
}
