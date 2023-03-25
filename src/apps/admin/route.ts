import { Router } from 'express';
import { logger } from '../../libs/logs/logs';

export const router = Router();

router.get('/vars', (req, res) => {
    res.json(process.env);
});

router.get("/", (req, res) => {
    logger.info(`version: ${process.env.VERSION}`)
    res.json({ version: process.env.VERSION });
});
