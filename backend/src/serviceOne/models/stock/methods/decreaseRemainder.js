import { NotEnoughError, NotFoundError } from "../../../../config/errors";
import { Actions } from "../../../../../shared/types";
import { saveHistory } from "../../../services/saveHistory";
import { getStock } from "./getRemainder";

/**
 * Метод для уменьшения остатка.
 * @async
 * @param {string} item  - plu товара.
 * @param {number} shop - id магазина.
 * @param {number} amount - количество, на которое нужно уменьшить остаток.
 */
export const decreaseRemainder = async (item, shop, amount) => {
    const stockRes = await getStock(shop, item);

    if (stockRes.get('remainder') - amount < 0) {
        throw new NotEnoughError(`Remainder can't be less than 0.`);
    }

    await stockRes.decrement(
        'remainder', {
            by: amount,
        }
    );

    await saveHistory({
        shopId: stockRes.get('shop'),
        plu: stockRes.get('item'),
        action: Actions.decreaseRemainder
    });
}