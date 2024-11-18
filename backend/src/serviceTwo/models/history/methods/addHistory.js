import { History } from ".."
import { Actions } from "../../../../../shared/types";
import { InternalServerError } from "../../../../config/errors";

/**
 * Метод для добавления новой записи истории действий.
 * @async
 * @param {number} shopId - id магазина.
 * @param {string} plu - plu товара.
 * @param {string} action - действие с товаром.
 */
export const addHistory = async (shopId, plu, action) => {
    if (!Object.values(Actions).includes(action)) {
        throw new InternalServerError('Invalid action parameter.');
    }
    console.log(action)
    await History.create({shopId: shopId, plu: plu, action: action});
    
}