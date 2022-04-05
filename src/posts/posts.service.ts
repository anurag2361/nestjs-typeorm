import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.dto';
import UserEntity from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Posts } from './posts.dto';
import PostEntity from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<Posts>,
    @InjectRepository(UserEntity) private userRepository: Repository<User>,
  ) {}

  async getAllPosts() {
    try {
      return await this.postsRepository.find();
    } catch (error) {
      return error;
    }
  }

  async createPosts(post: Posts) {
    try {
      const newpost = await this.postsRepository.save(
        this.postsRepository.create(post),
      );
      this.incrementPostCount(post.author);
      return newpost;
    } catch (error) {
      return error;
    }
  }

  private async incrementPostCount(authorId: number) {
    const user = await this.userRepository.findOne({
      where: { id: authorId },
    });
    await this.userRepository.update(
      { id: authorId },
      { post_count: user.post_count + 1 },
    );
    console.log(`post count updated for id:${authorId} `);
  }
}
