import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Post } from './Post';

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 255 })
    firstName: string;

    @Column("varchar", { length: 255 })
    lastName: string;

    @Column("date")
    birthday: Date;

    @Column("varchar", { length: 255 })
    username: string;

    @Column("varchar", { length: 255 })
    email: string;

    @Column("text", { nullable: true })
    password: string;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];
}
