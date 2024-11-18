import { Actions } from "../../../../../shared/types";
import { saveHistory } from "../../../services/saveHistory";
import { getStock } from "./getRemainder";


/**
 * Метод для увеличения остатка.
 * @async
 * @param {string} item  - plu товара.
 * @param {number} shop - id магазина.
 * @param {number} amount - количество, на которое нужно увеличить остаток.
 */
export const increaseRemainder = async (item, shop, amount) => {
    const stockRes = await getStock(shop, item);

    await stockRes.increment(
        'remainder', {
            by: amount,
        }
    );
    console.log(Actions.increaseRemainder)
    await saveHistory({
        shopId: stockRes.get('shop'),
        plu: stockRes.get('item'),
        action: Actions.increaseRemainder
    });
}