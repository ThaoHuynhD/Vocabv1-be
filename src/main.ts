import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true, // Enable this if you use cookies or auth headers
  });

  const config = new DocumentBuilder()
    .setTitle('Recipes API')
    .setDescription('Recipes API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
