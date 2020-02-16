import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Tweet } from "src/tweets/tweet.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class User extends BaseEntity {

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
  tweets?: Tweet[]; 

  @ManyToMany(type => User)
  @JoinTable()
  friends?: User[];

}