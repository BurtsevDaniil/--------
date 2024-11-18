import { Actions } from "../../../../../shared/types";
import { saveHistory } from "../../../services/saveHistory";
import { decreaseRemainder } from "./decreaseRemainder";
import { getStock } from "./getRemainder";
/**
 * Метод для увеличения количества товаров в заказе.
 * @async
 * @param {string} item - plu товара.
 * @param {number} shop - id магазина.
 * @param {number} amount - число, на которое нужно увеличить количество товаров в заказе.
 */
export const placeOrder = async (item, shop, amount) => {
    const stockRes = await getStock(shop, item);

    await decreaseRemainder(item, shop, amount);

    await stockRes.increment('ordered_amount', {
        by: amount
    });
    await saveHistory({
        shopId: stockRes.get('shop'),
        plu: stockRes.get('item'),
        action: Actions.placeOrder
    });
}