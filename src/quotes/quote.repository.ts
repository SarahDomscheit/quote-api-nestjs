import { Injectable } from '@nestjs/common';
import { quotes } from 'src/quotes/quote.data';
import { Quote } from 'src/quotes/quote.interface';

@Injectable()
export class QuoteRepository {
  private readonly quotes: Quote[] = quotes;

  getQuotes(): Quote[] {
    return this.quotes;
  }

  getRandomQuotes(): Quote[] {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return [this.quotes[randomIndex]];
  }
}
