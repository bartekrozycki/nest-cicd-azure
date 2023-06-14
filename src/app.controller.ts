import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller()
export class AppController {
  constructor(private readonly appService: JokeService) {}

  @Get()
  async getHello() {
    const joke = await this.appService.getJoke();

    return `
<!DOCTYPE html>
<html>
<head>
  <title>Joke Display</title>
  <!-- Bootstrap CSS from CDN -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    /* Add custom styles here */
    .footer {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="container mt-5">
    <h1>Joke</h1>
    <p id="joke" class="lead">${joke}</p>
  </div>

  <footer class="footer">
    <div class="container">
      <p>Deployment Hash: <span id="deployment-hash">${process.env.WEBSITE_INSTANCE_ID}</span></p>
    </div>
  </footer>

  <!-- Bootstrap JS from CDN -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </script>
</body>
</html>


`;
  }
}
