import { setupShopsRoutes } from "./shops.routes"
import { app } from '../index'
import { setupItemRoutes } from "./items.routes";
import { setupStockRoutes } from "./stock.routes";

/**
 * 
 * @param {typeof app} app 
 */
export const setupAppRoutes = async (app) => {
    setupShopsRoutes(app);
    setupItemRoutes(app);
    setupStockRoutes(app);
}