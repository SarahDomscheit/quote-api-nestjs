import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Quote } from './interfaces/quote.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllQuotes(): Quote[] {
    return this.appService.getAllQuotes();
  }
}
