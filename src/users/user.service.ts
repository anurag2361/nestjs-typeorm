import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    try {
      return await this.userRepository.find({ relations: ['posts'] });
    } catch (error) {
      return error;
    }
  }

  async createUsers(user: User) {
    try {
      const newuser = this.userRepository.create(user);
      await this.userRepository.save(newuser);
      return newuser;
    } catch (error) {
      return error;
    }
  }
}
