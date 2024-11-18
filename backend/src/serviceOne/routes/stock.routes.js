import { app } from '../index'
import { createRemainder } from '../models/stock/methods/createRemainder';
import { decreaseRemainder } from '../models/stock/methods/decreaseRemainder';
import { getOrderedAmount } from '../models/stock/methods/getOrderedAmount';
import { getAllRemainders, getRemainder, getRemainderByItemPlu, getRemainderByShopId } from '../models/stock/methods/getRemainder';
import { increaseRemainder } from '../models/stock/methods/increaseRemainder';
import { placeOrder } from '../models/stock/methods/placeOrder';
import { resolveOrder } from '../models/stock/methods/resolveOrder';
/**
 * Позволяет определить эндпоинты сервиса для остатков.
 * @param {typeof app} app
 */
export const setupStockRoutes = async (app) => {
    app.post('/stock/add', async (req, res) => {
        const item = req.body.item;
        const shop = req.body.shop;
        const amount = req.body.amount;
        await createRemainder(item, shop, amount);
        res.send(200);
        
    });

    app.post('/stock/decrease', async (req, res) => {
        const item = req.body.item;
        const shop = req.body.shop;
        const amount = req.body.amount;
        await decreaseRemainder(item, shop, amount);
        res.send(200);
    });

    app.post('/stock/increase', async (req, res) => {
        const item = req.body.item;
        const shop = req.body.shop;
        const amount = req.body.amount;
        await increaseRemainder(item, shop, amount);
        res.send(200);
    });

    app.post('/stock/place_order', async (req, res) => {
        const item = req.body.item;
        const shop = req.body.shop;
        const amount = req.body.amount;
        await placeOrder(shop, item, amount);
        res.send(200);
    });

    app.post('/stock/resolve_order', async (req, res) => {
        const item = req.body.item;
        const shop = req.body.shop;
        const amount = req.body.amount;
        await resolveOrder(shop, item, amount);
        res.send(200);
    });
    
    app.post('/stock/getByPlu', async (req, res) => {
        const plu = req.body.plu;
        const stockRes = await getRemainderByItemPlu(plu);
        res.send(stockRes);
    });

    app.post('/stock/getByShopId', async (req, res) => {
        const id = req.body.id;
        const stockRes = await getRemainderByShopId(id);
        res.send(stockRes);
    });

    app.post('/stock/getRemained', async (req, res) => {
        const shop = req.body.shop;
        const item = req.body.item;
        const remainder = await getRemainder(shop, item);
        res.send(remainder);
    });

    app.post('/stock/getOrderedAmount', async (req, res) => {
        const shop = req.body.shop;
        const item = req.body.item;
        const ordered = await getOrderedAmount(shop, item);
        res.send(ordered);
    });

    //Аналогично с /item/getAllItems
    app.post('/stock/getAllStocks', async (_req, res) => {
        const stocks = await getAllRemainders();
        res.send(stocks);
    });
}