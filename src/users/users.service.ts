import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { v4 } from 'uuid';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: v4(),
      name: '',
      email: '',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAllUsers() {
    return this.users;
  }

  createUser(name: string, email: string, password: string) {
    const user = {
      id: v4(),
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: string, updatedFields: UpdateUserDto): User {
    const task = this.getUserById(id);
    const newUser = Object.assign(task, updatedFields);
    this.users = this.users.map((user) => (user.id === id ? newUser : user));
    return newUser;
  }
}
