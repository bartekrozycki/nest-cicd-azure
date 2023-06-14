import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller()
export class AppController {
  constructor(private readonly appService: JokeService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
