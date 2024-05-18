import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Nyobiv1Controller } from './nyobiv1/nyobiv1.controller';

@Module({
  imports: [],
  controllers: [AppController, Nyobiv1Controller],
  providers: [AppService],
})
export class AppModule {}
