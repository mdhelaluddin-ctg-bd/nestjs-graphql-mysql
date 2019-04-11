import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolvers } from './users.resolvers';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  components: [UsersService, UsersResolvers],
  exports: [UsersService]
})
export class UsersModule { }
