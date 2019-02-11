import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Post, User } from './'

@Entity()
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    textContent: string

    @ManyToOne(type => User, user => user.comments)
    user: User

    @ManyToOne(type => Post, post => post.comments)
    post: Post

}