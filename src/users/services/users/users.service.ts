import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from 'src/users/dots/createUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { User as UserEntity } from '../../../typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson',
      email: 'anson@gmail.com',
    },
    {
      id: 2,
      username: 'danny',
      password: 'danny',
      email: 'danny@gmail.com',
    },
    {
      id: 3,
      username: 'derek',
      password: 'derek',
      email: 'derek@gmail.com',
    },
    {
      id: 4,
      username: 'samntha',
      password: 'samntha',
      email: 'samntha@gmail.com',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => id === user.id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
