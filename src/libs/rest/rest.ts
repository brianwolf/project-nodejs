/**
 * Rest
 * --------
 * v1.0.0
 */

import { Express } from "express";
import { loadErrorHandlers, loadRestModifiers, loadRoutes } from "./src/functions";

/**
 * Configura express cargandole rutas, modificadores y errors handlers
 *
 * @param app
 * @param regex
 */
export async function configExpress(app: Express, regex: string) {

    await loadRoutes(app, regex)
    await loadRestModifiers(app)
    await loadErrorHandlers(app)
}