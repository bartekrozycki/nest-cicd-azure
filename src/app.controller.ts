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

    /* Center the content vertically */
    html, body {
      height: 100%;
    }

    body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center">Joke</h1>
        <p id="joke" class="lead text-center">${joke}</p>
      </div>
    </div>
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
