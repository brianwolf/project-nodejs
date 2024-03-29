import { Router } from 'express';
import { AppException } from '../../libs/error/error';
import { logger } from '../../libs/logs/logs';
import * as dto from './dto';
import { Errors } from './error';
import * as service from './service';

export const router = Router();
export const path = '/api/v1/examples'


/**
 * @openapi
 * /api/v1/examples/error:
 *   get:
 *     tags:
 *       - Example
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
 *     tags:
 *       - Example
 *     responses:
 *       200:
 *         description: 
 */
router.get(`${path}/error/business`, (req, res) => {
    throw new AppException(Errors.BOOOM.toString(), "Se rompio todo!!!!");
});


/**
 * @openapi
 * /api/v1/examples:
 *   get:
 *     tags:
 *       - Example
 *     responses:
 *       200:
 *         description: if have content
 */
router.get(`${path}`, async (req, res) => {
    let result = await service.list()
    res.status(200).json(result)
});


/**
* @openapi
* /api/v1/examples:
*   post:
*     tags:
*       - Example
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             properties: {}
*     responses:
*       200:
*         description: 
 */
router.post(`${path}`, async (req, res) => {

    let example = dto.jsonToExample(req.body);
    let id = await service.save(example)

    res.status(201).json({ 'id': id })
});

/**
 * @openapi
* /api/v1/examples/{id} :
*   get:
*     parameters:
*     - in: path
*       name: id
*       type: integer
*       required: true
*     tags:
*       - Example
*     responses:
*       200:
*         description: if have content
 */
router.get(`${path}/:id`, async (req, res) => {

    let id = Number(req.params.id);
    let example = await service.get(id)

    if (!example) {
        return res.status(204).send()
    }

    return res.status(200).json(example)
});

/**
 * @openapi
* /api/v1/examples/{id} :
*   delete:
*     parameters:
*       - in: path
*         name: id
*         type: integer
*         required: true
*         description: Numeric id of the example to delete.
*     tags:
*       - Example
*     responses:
*       200:
*         description: {'id': id}
 */
router.delete(`${path}/:id`, async (req, res) => {

    let id = Number(req.params.id);
    await service.deleteById(id)

    return res.status(204).send()
});