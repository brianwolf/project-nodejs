import { Router } from 'express';

export const router = Router();
export const path = '/api/v1/examples'

router.get(`${path}`, (req, res) => {
    res.send(JSON.stringify(process.env));
});

router.get(`${path}/error`, (req, res) => {
    throw new Error("BOOOM!!!!");
});