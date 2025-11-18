import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteRepository } from './quotes/quote.repository';
import { QuoteModule } from './quotes/quote.module';

@Module({
  imports: [QuoteModule],
  controllers: [AppController],
  providers: [AppService, QuoteRepository],
})
export class AppModule {}
