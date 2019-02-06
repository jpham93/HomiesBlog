import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User, Comment } from './'

@Entity()
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany(type => User, user => user.posts)
    user: User;

    @Column("varchar", { length: 255 })
    title: string;

    @Column("text")
    textContent: string;

    @Column("varchar", { length: 255, nullable: true })
    mediaUrl: string;

    @Column({ type: 'simple-array', default: '' })
    likes: string[];

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];
}