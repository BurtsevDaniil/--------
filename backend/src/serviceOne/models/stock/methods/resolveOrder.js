import { Actions } from "../../../../../shared/types";
import { saveHistory } from "../../../services/saveHistory";
import { getStock } from "./getRemainder";
import { increaseRemainder } from "./increaseRemainder";
/**
 * Метод для уменьшения количества товаров в заказе.
 * @async
 * @param {string} item - plu товара.
 * @param {number} shop - id магазина.
 * @param {number} amount - число, на которое нужно уменьшить количество товаров в заказе.
 */
export const resolveOrder = async (item, shop, amount) => {
    const stockRes = await getStock(shop, item);

    await increaseRemainder(item, shop, amount);

    await stockRes.decrement('ordered_amount', {
        by: amount
    });

    await saveHistory({
        shopId: stockRes.get('shop'),
        plu: stockRes.get('item'),
        action: Actions.resolveOrder
    });
}