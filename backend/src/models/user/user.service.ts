import { Body, Injectable } from '@nestjs/common';
import { UsersModule } from './user.model';
import { CreateUserQueryDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(@Body() query: CreateUserQueryDto): Promise<UsersModule> {
    const user: UserEntity = new UserEntity();
    user.name = query.name;
    user.age = query.age;
    user.sex = query.sex;
    user.surname = query.surname;
    user.problems = query.problems;
    return await this.userRepo.save(user);
  }

  async checkUserProblems(): Promise<number> {
    const users = await this.userRepo.find({
      where: {
        problems: true,
      },
    });
    users.forEach((u) => {
      u.problems = false;
    });
    return users.length;
  }
}
