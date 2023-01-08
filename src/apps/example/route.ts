import { Router } from 'express';
import { AppException } from '../../libs/error/error';

export const router = Router();
export const path = '/api/v1/examples'

enum Errors {
    BOOOM
}

router.get(`${path}`, (req, res) => {
    res.send(JSON.stringify(process.env));
});

router.get(`${path}/error`, (req, res) => {
    throw new Error("BOOOM!!!!");
});

router.get(`${path}/error/business`, (req, res) => {
    throw new AppException(Errors.BOOOM.toString(), "Se rompio todo!!!!");
});