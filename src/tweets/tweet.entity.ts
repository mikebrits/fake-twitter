import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "src/users/user.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class Tweet extends BaseEntity {

    @Column()
    tweet: string;

    @ManyToOne(type => User, user => user.tweets)
    user: User;

}