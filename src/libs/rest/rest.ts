// Rest
// --------
// v1.0.0

import fastglob from 'fast-glob'
import { Express } from "express";

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

}