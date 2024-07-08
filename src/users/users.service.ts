import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { v4 } from 'uuid';
import { UpdateUserDto, CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(createDto: CreateUserDto): User {
    const user: User = {
      id: v4(),
      first_name: createDto.first_name,
      last_name: createDto.last_name,
      date_birth: createDto.dateOfBirth,
      address: createDto.address,
      token: createDto.isActive,
      password: createDto.password,
      mobile_phone: createDto.mobilePhone,
      email: createDto.email,
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
    const user = this.getUserById(id);
    const newUser = Object.assign(user, updatedFields);
    this.users = this.users.map((user) => (user.id === id ? newUser : user));
    return newUser;
  }
}
