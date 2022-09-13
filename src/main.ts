import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://google.com', // only allow requests from google to force CORS errors
  });
  await app.listen(3000);
}
bootstrap();
