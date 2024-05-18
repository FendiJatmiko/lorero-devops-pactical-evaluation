//import { Controller } from '@nestjs/common';

//@Controller('nyobiv1')
//export class Nyobiv1Controller {}
import { Controller, Get } from '@nestjs/common';

@Controller('nyobiv1')
export class Nyobiv1Controller {
  @Get()
  getHello(): string {
    return 'Hello, Torero!';
  }
}

