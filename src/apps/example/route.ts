import { Router } from 'express';

export const router = Router();

router.get('/examples', (req, res) => {

    res.send(JSON.stringify(process.env));
});