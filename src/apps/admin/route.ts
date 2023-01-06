import { Router } from 'express';

export const router = Router();
export const path = '/vars'

router.get(path, (req, res) => {
    res.send(JSON.stringify(process.env));
});

