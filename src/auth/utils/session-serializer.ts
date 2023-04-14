import { UsersService } from 'src/users/services/users/users.service';
import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { User } from '../../typeorm';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    console.log('SerializeUser');
    done(null, user);
  }

  async deserializeUser(user: User, done: (err, user: User) => void) {
    console.log('DeserializeUser');
    const userDb = await this.usersService.findUserByUserId(user.id);
    return userDb ? done(null, userDb) : done(null, null);
  }
}
