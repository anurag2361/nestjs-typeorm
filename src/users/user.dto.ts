import { Posts } from 'src/posts/posts.dto';

export class User {
  id?: number;
  name: string;
  posts?: Array<Posts>;
  post_count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CreateUserResponse {
  id?: number;
  name: string;
  posts?: Array<Posts>;
  post_count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
