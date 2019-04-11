import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 50 })
  username: string;

  @Column() password: string;

  @Column({length: 50})
  email: string;

}
