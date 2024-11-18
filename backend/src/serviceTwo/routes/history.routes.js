import { app } from ".."
import { addHistory } from "../models/history/methods/addHistory";
import { getHistoryByAction, getHistoryByDateFrame, getHistoryByItemPlu, getHistoryByShopId } from "../models/history/methods/getHistory";
/**
 * @param {typeof app} app 
 */
export const setupHistoryRoutes = (app) => {
    app.post('/history/add', async (req, res) => {
        const shopId = req.body.shopId;
        const plu = req.body.plu;
        const action = req.body.action;
        await addHistory(shopId, plu, action);
        res.send(200);
    });

    app.post('/history/getByShopId', async (req, res) => {
        const shopId = req.body.shopId;
        const histories = await getHistoryByShopId(shopId);
        res.send(histories);
    });

    app.post('/history/getByItemPlu', async (req, res) => {
        const plu = req.body.plu;
        const histories = await getHistoryByItemPlu(plu);
        res.send(histories);
    });

    app.post('/history/getByDate', async (req, res) => {
        const dateStarted = req.body.dateStarted;
        const dateEnded = req.body.dateEnded;
        const histories = await getHistoryByDateFrame(dateStarted, dateEnded);
        res.send(histories);
    });

    app.post('/history/getByAction', async (req, res) => {
        const action = req.body.action;
        const histories = await getHistoryByAction(action);
        res.send(histories);
    });
}