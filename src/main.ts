import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
  app.use(
    session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
<<<<<<< HEAD
   cookie:{
=======
    cookie:{
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
    maxAge: 300000
   }
    }),
   );
  await app.listen(3000);
<<<<<<< HEAD
}
bootstrap();
=======
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
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
