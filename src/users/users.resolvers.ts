import { Inject, forwardRef } from '@nestjs/common';
import { Query, Mutation, Resolver, ResolveProperty } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./users.entity";


@Resolver('User')
export class UsersResolvers {

  constructor(
    private readonly usersService: UsersService,
  ) { };

  @Query('users')
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Query('user')
  async getUser(obj, args, context, info): Promise<User> {
    const {id} = args;
    return await this.usersService.findOneById(id);
  }

  @Mutation('createUser')
  async create(obj, args: { user: User }, context, info): Promise<User> {
    return this.usersService.create(args.user);
  }

  @Mutation('updateUser')
  async updateUser(obj, args: { id: number, user: User }, context, info): Promise<any>{
    return await this.usersService.updateOneById(args.id, args.user);
  }

  @Mutation('delUser')
  async delUser(obj, args: { id: number}, context, info): Promise<any>{
    return await this.usersService.delOneById(args.id);
  }
}