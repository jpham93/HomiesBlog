import { Request, Response, NextFunction, Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();
const user = new UserController();

// Get current user
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    user.whoIs(req, res, next);
});

// Create Account
router.post('/signup', (req: Request, res: Response, next: NextFunction) => {
    user.signUp(req, res, next);
});

// Login

export default router;