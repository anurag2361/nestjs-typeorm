import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.dto';
import { UserService } from './user.service';
import { UserValidationPipe } from './validators/user.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body(new UserValidationPipe()) user: User) {
    return this.userService.createUsers(user);
  }
}
