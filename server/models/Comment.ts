import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    textContent: string

    @ManyToOne(type => Post, post => post.comments)
    post: Post

}