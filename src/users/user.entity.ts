import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: true })
  name: string;

  @Column('varchar')
  handle: string;

  @Column('varchar')
  email: string;

  @Column('int', { nullable: true })
  age: number; 

  @Column('boolean')
  over18: boolean;
}