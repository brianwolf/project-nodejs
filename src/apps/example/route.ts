import { Router } from 'express';
import { AppException } from '../../libs/error/error';
import { logger } from '../../libs/logs/logs';
import { Errors } from './error';

export const router = Router();
export const path = '/api/v1/examples'


/**
 * @openapi
 * /api/v1/examples/error:
 *   get:
 *     responses:
 *       200:
 *         description: 
 */
router.get(`${path}/error`, (req, res) => {
    let msg = "BOOOM!!!!"
    logger.error(msg)
    throw new Error(msg);
});

/**
 * @openapi
 * /api/v1/examples/error/business:
 *   get:
 *     responses:
 *       200:
 *         description: 
 */
router.get(`${path}/error/business`, (req, res) => {
    throw new AppException(Errors.BOOOM.toString(), "Se rompio todo!!!!");
});