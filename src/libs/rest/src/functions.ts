import { Express, NextFunction, Request, Response } from "express";
import fastglob from 'fast-glob';
import { AppException } from '../../error/error';
import { logger } from '../../logs/logs';

async function getRoutesByRegex(regex: string): Promise<string[]> {
    return await fastglob(regex)
}

export async function loadRoutes(app: Express, regex: string) {

    const routes = await getRoutesByRegex(regex);

    routes.forEach(async route => {
        const routeToImport = route.split('.')[0].replace('dist/', '../../../')

        if (routeToImport.endsWith('route')) {
            const r = await import(routeToImport)
            app.use('/', r.router)
        }
    })

}

export async function loadRestModifiers(app: Express) {

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next(err);
    });
}

export async function loadErrorHandlers(app: Express) {

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

        if (err instanceof AppException) {
            logger.warn(err)
            return res.status(409).json(err)
        }

        logger.error(err)
        return res.status(500).json({ cause: err.message })
    });
}