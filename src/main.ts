import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Motors Shop API')
    .setDescription(
      'A API do Site de Venda de Carros é bem documentada, fácil de usar e oferece suporte técnico abrangente. Com ela, os desenvolvedores têm a flexibilidade de criar aplicativos personalizados, plataformas de pesquisa de carros, serviços de agregação de dados automotivos e muito mais.',
    )
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Ads')
    .addTag('Comments')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: { groups: ['transform'] },
    }),
  );
  await app.listen(3000);
}
bootstrap();
