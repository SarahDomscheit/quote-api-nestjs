import { Injectable } from '@nestjs/common';
import { quotes } from 'src/data/quote.data';
import { Quote } from 'src/interfaces/quote.interface';

@Injectable()
export class QuoteRepository {
  private readonly quotes: Quote[] = quotes;

  getQuotes(): Quote[] {
    return this.quotes;
  }
}
