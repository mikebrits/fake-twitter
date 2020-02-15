import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}