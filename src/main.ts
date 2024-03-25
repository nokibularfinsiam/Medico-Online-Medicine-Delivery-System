import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.use(
    session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
    maxAge: 300000
   }
    }),
   );
  await app.listen(3000);
=======

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: 
             { secure: false,
               httpOnly: false,
               maxAge: 1000000
               }
    }),
    );
  await app.listen(7000);
>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
}
bootstrap();
