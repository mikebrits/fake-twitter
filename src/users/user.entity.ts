import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tweet } from "src/tweets/tweet.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  email: string;

  @Column()
  password: string;

  @Column('varchar', { nullable: true })
  name: string;

  @Column('varchar')
  handle: string;

  @Column('int', { nullable: true })
  age: number;

  @Column('boolean')
  over18: boolean;

  @OneToMany(
    type => Tweet,
    tweet => tweet.user,
  )
  tweets: Tweet[];
}