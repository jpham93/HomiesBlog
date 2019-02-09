import { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import { BaseController } from './base';
import { PostPatchInterface } from '../common/types';

export class PostController extends BaseController {

    public createPost = async (req: Request, res: Response, next: NextFunction) => {
        const user = await this.db.user.findOneOrFail(req.user[0].id)
            .catch((err: any) => {
                res.status(BAD_REQUEST).json({ error: 'user doesn\'t exist' });
            });
        const { title, textContent, mediaUrl } = req.body;
        const options = { title, textContent, mediaUrl, user };
        const post = await this.db.post.create(options);
        const newPost = await this.db.post.save(post)
            .catch((err: any) => res.status(BAD_REQUEST).json({ error: 'failed to create post' }));
        return res.json(newPost);
    }

    public getPost = async (req: Request, res: Response, next: NextFunction) => {
        const post = await this.db.post.findOneOrFail(req.params.id)
            .catch((err: any) => {
                res.status(BAD_REQUEST).json({ error: 'post doesn\'t exist' });
            });
        return res.json(post);
    }
    // get all of user's posts
    // get all of user's friend's posts

    public deletePost = async (req: Request, res: Response, next: NextFunction) => {
        const post = await this.db.post.findOneOrFail(req.params.id)
            .catch((err: any) => res.status(BAD_REQUEST).json({ error: 'post doesn\'t exist' }));
        this.db.post.delete(post.id)
            .catch((err: any) => res.status(BAD_REQUEST).json({ error: 'unable to delete' }));
        return res.status(204).json({});
    }

    public updatePost = async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.user[0].id;
        // confirm user owns post
        const owner = await this.db.post.createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .where('user.id = :id', { id: userId })
            .andWhere('post.id = :postId', { postId: req.params.id })
            .getOne()
            .catch((err: any) => res.status(BAD_REQUEST).json({ error: 'post cannot be found' }));
        await req.body.map((x: PostPatchInterface) => {
            this._patch(x.op, x.path, x.value, req.params.id)
                .catch((err: any) => res.status(BAD_REQUEST).json({ error: err.message }));
        });
        res.json(await this.db.post.findOneOrFail(req.params.id));
    }

    private _patch = async (op: string, path: string, value: string, id: string) => {
        const pathOptions: string[] = ['/textContent', '/title', '/mediaUrl'];
        if (!pathOptions.includes(path)) {
            throw new Error('invalid body parameters');
        }
        const trimmedPath = path.replace('/', '');
        if (op === 'replace') {
            this.db.post.update(id, { [trimmedPath]: value });
        } else if (op === 'remove') {
            this.db.post.update(id, { [trimmedPath]: '' });
        } else {
            throw new Error('not a valid operation');
        }
    }
}
