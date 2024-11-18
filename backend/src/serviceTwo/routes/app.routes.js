import { app } from ".."
import { setupHistoryRoutes } from "./history.routes"
/**
 * @param {typeof app} app 
 */
export const setupAppRoutes = (app) => {
    setupHistoryRoutes(app);
}