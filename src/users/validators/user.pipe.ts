import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserResponse, User } from '../user.dto';
import { userSchema } from './user.schema';

export class UserValidationPipe
  implements PipeTransform<User, CreateUserResponse>
{
  public transform(
    value: User,
    metadata: ArgumentMetadata,
  ): CreateUserResponse {
    const result = userSchema.validate(value, { convert: false });
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    } else {
      return result.value as CreateUserResponse;
    }
  }
}
