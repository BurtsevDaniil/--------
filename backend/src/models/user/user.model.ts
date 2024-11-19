import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SEX_TYPES } from 'src/config/types';

export interface UserType {
  name: string;
  surname: string;
  age: number;
  sex: SEX_TYPES;
  problems: boolean;
}

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
