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