<<<<<<< HEAD
import { Controller, Get, Post, Put, Delete, Patch, Options } from '@nestjs/common';
=======
import { Controller, Get, Post,Put, Patch,Delete } from '@nestjs/common';
>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
<<<<<<< HEAD
=======

  @Get('/hello')
  getmyHello():object{
    return this.appService.getmyHello();
  }

  @Post('/farhan')
  removeMe():object{
    return this.appService.removeMe();
  }

  @Put('/siam')
  addMe():object{
    return this.appService.addMe();
  }

  @Patch('/s1')
  deleteMe():object{
    return this.appService.deleteMe();
  }

  @Delete('/s2')
  delMe():object{
    return this.appService.delMe();
  }
>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
}
