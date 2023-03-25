import { Router } from 'express';
import { AppException } from '../../libs/error/error';
import { logger } from '../../libs/logs/logs'

export const router = Router();
export const path = '/api/v1/examples'

enum Errors {
    BOOOM
}

router.get(`${path}/error`, (req, res) => {
    let msg = "BOOOM!!!!"
    logger.error(msg)
    throw new Error(msg);
});

router.get(`${path}/error/business`, (req, res) => {
    throw new AppException(Errors.BOOOM.toString(), "Se rompio todo!!!!");
});