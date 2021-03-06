import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcrypt';
import { CreateUserDTO } from './users.dto';
import { Tweet } from 'src/tweets/tweet.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id, {relations: ["friends"]});
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async create(user: CreateUserDTO): Promise<User> {
    const hashedPassword = await hash(user.password, 10);
    return this.usersRepository.save({ ...user, password: hashedPassword });
  }

  update(id: string, fields: CreateUserDTO): Promise<User> {
    return this.usersRepository.save({ id, ...fields });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findTweets(id: string): Promise<Tweet[]> {
    const user = await this.usersRepository.findOne(id, {
      relations: ['tweets'],
    });
    return user.tweets;
  }

  async addFriend(userId: string, friendId: string): Promise<User> {
    const friend = await this.usersRepository.findOne(friendId);
    if (!friend)
      throw new NotFoundException(`User with id ${friendId} not found`);

    await getConnection()
      .createQueryBuilder()
      .relation(User, 'friends')
      .of(userId)
      .add(friend);

    return friend;
  }
}
