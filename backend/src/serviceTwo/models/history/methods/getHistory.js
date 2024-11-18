import { Op } from "sequelize";
import { History } from ".."
import { NotFoundError } from "../../../../config/errors"

/**
 * Метод для получения записей истории по id магазина.
 * @async
 * @param {number} shopId - id магазина.
 * @returns {Promise<History[]>}
 */
export const getHistoryByShopId = async (shopId) => {
    const historyRes = await History.findAll(
        {
            where: {
                shopId: shopId
            }
        }
    )
    if (!historyRes) {
        throw new NotFoundError('History entries with this shop id not found.');
    }
    return historyRes;
}

/**
 * Метод для получения записей истории по plu товара.
 * @async
 * @param {string} plu - id магазина.
 * @returns {Promise<History[]>}
 */
export const getHistoryByItemPlu = async (plu) => {
    const historyRes = await History.findAll(
        {
            where: {
                plu: plu
            }
        }
    )
    if (!historyRes) {
        throw new NotFoundError('History entries with this item plu not found.');
    }
    return historyRes;
}

/**
 * Метод для получения записей истории за определённый промежуток времени.
 * @async
 * @param {Date} dateStart - начало промежутка.
 * @param {Date} dateEnd - конец промежутка.
 * @returns {Promise<History[]>}
 */
export const getHistoryByDateFrame = async (dateStart, dateEnd) => {
    const historyRes = await History.findAll(
        {
            where: {
                date: {
                    [Op.between]: [dateStart, dateEnd]
                }
            }
        }
    )
    if (!historyRes) {
        throw new NotFoundError('No history entries were found for this time period.');
    }
    return historyRes;
}

/**
 * Метод для получения записей истории по дествию.
 * @async
 * @param {string} action - название действия.
 * @returns {Promise<History[]>}
 */
export const getHistoryByAction = async (action) => {
    const historyRes = await History.findAll(
        {
            where: {
                action: action
            }
        }
    )
    if (!historyRes) {
        throw new NotFoundError('History entries with this action not found.');
    }
    return historyRes;
}