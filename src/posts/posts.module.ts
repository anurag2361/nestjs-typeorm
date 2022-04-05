import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import PostEntity from './posts.entity';
import UserEntity from 'src/users/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/users/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity]), UsersModule],
  providers: [PostsService, UserService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
