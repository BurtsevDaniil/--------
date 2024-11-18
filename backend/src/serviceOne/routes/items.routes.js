import { app } from '../index'
import { addItem } from '../models/items/methods/addItem';
import { getAllItems, getItemByName, getItemByPLU } from '../models/items/methods/getItem';
/**
 * Позволяет определить эндпоинты сервиса для товаров.
 * @param {typeof app} app
 */
export const setupItemRoutes = async (app) => {
    app.post('/item/add', async (req, res) => {
        const plu = req.body.plu;
        const name = req.body.name;
        await addItem(plu, name);
        res.send(200);
    })

    app.post('/item/getByName', async (req, res) => {
        const name = req.body.name;
        const item = await getItemByName(name);
        res.send(item);
    });

    app.post('/item/getByPlu', async (req, res) => {
        const plu = req.body.plu;
        const item = await getItemByPLU(plu);
        res.send(item);
    });

    //Естественно, в настоящем приложении пободного метода не будет, либо будет некая авторизация с доступом только определённым людям,
    //либо некоторые поля будут скрыты
    app.post('/item/getAllItems', async (_req, res) => {
        const items = await getAllItems();
        res.send(items);
    })
}