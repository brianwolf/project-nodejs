// Rest
// --------
// v1.0.0

import { Express, NextFunction, Request, Response } from "express";
import fastglob from 'fast-glob';

async function getRoutesByRegex(regex: string): Promise<string[]> {
    return await fastglob(regex)
}


export async function loadRoutes(app: Express, regex: string) {

    const routes = await getRoutesByRegex(regex);

    routes.forEach(async route => {
        const routeToImport = route.split('.')[0].replace('src/', '../../')

        const r = await import(routeToImport)
        app.use('/', r.router)
    })

    await loadRestModifiers(app)
    await loadErrorHandlers(app)

}

async function loadRestModifiers(app: Express) {
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next();
    });
}

async function loadErrorHandlers(app: Express) {
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err) {
            res.status(500).json({ cause: err.message })
        }
        next();
    });
}