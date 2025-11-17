import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteRepository } from './repositories/quote.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, QuoteRepository],
})
export class AppModule {}
