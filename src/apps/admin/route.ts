import { Router } from 'express';
import { logger } from '../../libs/logs/logs';

const swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

export const router = Router();

router.get('/vars', (req, res) => {
    res.json(process.env);
});

router.get("/", (req, res) => {
    logger.info(`version: ${process.env.VERSION}`)
    res.json({ version: process.env.VERSION });
});

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API REST",
            version: "0.1.0",
            description:
                "API REST application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ['dist/apps/*/route.js'],
}

const specs = swaggerJsdoc(options)
router.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))


