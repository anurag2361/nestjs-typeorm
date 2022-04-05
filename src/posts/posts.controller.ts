import { Body, Controller, Get, Post } from '@nestjs/common';
import { Posts } from './posts.dto';
import { PostsService } from './posts.service';
import { PostValidationPipe } from './validators/post.pipe';

@Controller('posts')
export class PostsController {
  constructor(private readonly userService: PostsService) {}

  @Get()
  getPosts() {
    return this.userService.getAllPosts();
  }

  @Post()
  async createPost(@Body(new PostValidationPipe()) user: Posts) {
    return this.userService.createPosts(user);
  }
}
