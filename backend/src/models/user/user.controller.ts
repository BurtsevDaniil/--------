import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserQueryDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async createUser(@Body() user: CreateUserQueryDto) {
    console.log(user);
    await this.userService.create(user);
  }

  @Get('/checkup')
  async checkUserProblems(): Promise<number> {
    const affected = await this.userService.checkUserProblems();
    return affected;
  }
}
