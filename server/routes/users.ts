import { Request, Response, NextFunction, Router } from 'express';
import { UserController } from '../controllers/UserController';
import { check, validationResult } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';

const router = Router();
const user = new UserController();

// Get current user
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    user.whoIs(req, res, next);
});

// Create Account
router.post('/signup', [
    check('firstName')
        .isString()
        .not().isEmpty(),
    check('password').isLength({ min: 6 }),
    check('lastName')
        .isString()
        .not().isEmpty(),
    check('username')
        .isString()
        .not().isEmpty(),
    check('email').isEmail(),
    check('birthday')
        .not().isEmpty(),
    sanitizeBody('email').normalizeEmail(),
    sanitizeBody('birthday').toDate()

], (req: Request, res: Response, next: NextFunction) => {
    const errors: any = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    user.signUp(req, res, next);
});

// Login
router.post('/login', [
    check('username')
        .isString()
        .not().isEmpty(),
    check('password').isLength({ min: 6 })
], (req: Request, res: Response, next: NextFunction) => {
    const errors: any = validationResult(req);
    user.login(req, res, next);
});

export default router;