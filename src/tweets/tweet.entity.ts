import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/users/user.entity";

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    tweet: string;

    @ManyToOne(type => User, user => user.tweets)
    user: User;
}