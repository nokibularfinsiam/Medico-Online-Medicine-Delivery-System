import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Hello World!';
=======
<<<<<<< HEAD
    return '<h1>Great power comes from great responsibility</h1>';
=======
    return '<h1>hello shahriar</h1>';
  }

  getmyHello(): object {
    return {message: 'hello'};
  }

  removeMe(): object{

    return {message: ' hi world'};

  }

  addMe(): object{

    return {message: ' added '};

  }

  deleteMe(): object{

    return {message: ' deleted '};

  }

  delMe(): object{

    return {message: ' del '};

>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
  }
}
