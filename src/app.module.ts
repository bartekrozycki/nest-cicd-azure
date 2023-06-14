import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JokeService } from './joke.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [JokeService],
})
export class AppModule {}
