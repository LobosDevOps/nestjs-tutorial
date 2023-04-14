import { Inject, Injectable } from '@nestjs/common';

import { UsersService } from '../../../users/services/users/users.service';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(usename: string, password: string) {
    const userDb = await this.userService.findUserByUsername(usename);
    // console.log('usename:', usename, 'password:', password, 'userDb:', userDb);
    
    if (userDb) {
      console.log(userDb);
    }
  }
}
