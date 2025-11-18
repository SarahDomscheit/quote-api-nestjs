import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './quote.interface';

@Injectable()
export class QuoteService {
  constructor(private readonly quotesRepository: QuoteRepository) {}
  getAllQuotes(): Quote[] {
    return this.quotesRepository.getQuotes();
  }

  getRandomQuotes(): Quote[] {
    return this.quotesRepository.getRandomQuotes();
  }
}
