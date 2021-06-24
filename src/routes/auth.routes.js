import { Router } from 'express';

const router = Router();

router.get('/singup', (req,res)=> {
    res.json('Auth')
});

export default router;