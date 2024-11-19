import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_SCHEMA,
  DB_USER,
} from './config/enviroment';
import { UsersModule } from './models/user/user.model';
import { UserEntity } from './models/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: Number(DB_PORT),
      database: DB_NAME,
      schema: DB_SCHEMA,
      username: DB_USER,
      password: DB_PASS,
      synchronize: true,
      entities: [UserEntity],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
