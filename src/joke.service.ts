import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

const API = 'https://v2.jokeapi.dev';

@Injectable()
export class JokeService {
  async getJoke(): Promise<string> {
    const response = await fetch(API + '/joke/Programming?format=txt');
    return await response.text();
  }
}
