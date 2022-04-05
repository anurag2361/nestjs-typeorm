export class Posts {
  id?: number;
  title: string;
  content: string;
  author: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CreatePostResponse {
  id?: number;
  title: string;
  content: string;
  author: number;
  createdAt?: Date;
  updatedAt?: Date;
}
