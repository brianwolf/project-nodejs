import { Router } from 'express';

export const router = Router();
export const path = '/vars'


router.get(path, (req, res) => {
    res.json(process.env);
});

router.get("/", (req, res) => {
    res.json({ version: process.env.VERSION });
});
