import { Component } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./users.entity";

@Component()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  create(user: User): Promise<User> {
    user = Object.setPrototypeOf(user, {});
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneById(uid: number): Promise<User> {
    return this.userRepository.findOne(uid);
  }

  updateOneById(uid: number, user: User) {
    user = Object.setPrototypeOf(user, {});
    return this.userRepository.update(uid, user);
    // const qb = this.userRepository.createQueryBuilder('user');
    // return qb.update(UserEntity).setParameters(user).where("user.id = :id", { id: uid }).execute();
  }

  delOneById(uid: number) {
    return this.userRepository.delete(uid);
  }
}