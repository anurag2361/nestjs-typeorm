import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { CreatePostResponse, Posts } from '../posts.dto';
import { postSchema } from './post.schema';

export class PostValidationPipe
  implements PipeTransform<Posts, CreatePostResponse>
{
  public transform(
    value: Posts,
    metadata: ArgumentMetadata,
  ): CreatePostResponse {
    const result = postSchema.validate(value, { convert: false });
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    } else {
      return result.value as CreatePostResponse;
    }
  }
}
