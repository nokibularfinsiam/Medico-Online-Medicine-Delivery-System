<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './customer/auth/auth.module';


@Module({
  imports: [CustomerModule,AuthModule, TypeOrmModule.forRoot(
=======
<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverymanModule} from './deliveryman/deliveryman.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './deliveryman/auth/auth.module';

@Module({
  imports: [DeliverymanModule, TypeOrmModule.forRoot(
=======

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './seller/seller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/seller/auth/auth.module';

@Module({
  imports: [SellerModule, TypeOrmModule.forRoot(
>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
<<<<<<< HEAD
    password: 'admin',
    database: 'user',
    autoLoadEntities: true,
    synchronize: true,
    } ),
  AuthModule],
=======
<<<<<<< HEAD
    password: '1510',
    database: 'Deliveryman',
    autoLoadEntities: true,
    synchronize: true,
    } ), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
=======
    password: 'farhan',
    database: 'MyDatabase',
    autoLoadEntities: true,
    synchronize: true,
    } ), AuthModule,
    ],
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
  controllers: [],
  providers: [],
})
export class AppModule {}
<<<<<<< HEAD
=======
>>>>>>> 382670d0265548811376d3e7f2bec11e7f872c0e
>>>>>>> f516a931265cabcd796028731a0baa22bb9f3aab
