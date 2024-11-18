import { app } from '../index'
import { addShop } from '../models/shops/methods/addShop';
import { getAllShops } from '../models/shops/methods/getShop';
/**
 * Позволяет определить эндпоинты сервиса для магазинов.
 * @param {typeof app} app
 */
export const setupShopsRoutes = async (app) => {
    app.post('/shop/add', async (req, res) => {
        const name = req.body.name;
        await addShop(name);
        res.send(200);
    })

    //Аналогично, как с /item/getAllItems
    app.post('/shop/getAllShops', async (_req, res) => {
        const shops = await getAllShops();
        res.send(shops);
    })
}