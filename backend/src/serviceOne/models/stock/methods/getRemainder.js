import { Stock } from "..";
import { NotFoundError } from "../../../../config/errors";
import { getItemByName } from "../../items/methods/getItem";
import { getShop } from "../../shops/methods/getShop";

/**
 * Метод для получения остатка определённого товара для определённого магазина.
 * @async
 * @param {number} shop - id магазина.
 * @param {string} item - plu товара.
 * @returns {Promise<number>}
 */
export const getRemainder = async (shop, item) => {
    const stockRes = await Stock.findOne(
        {
            where: {
                shop: shop,
                item: item
            }
        }
    );
    if (!stockRes) {
        throw new NotFoundError('Stock not found.');
    }
    return stockRes.get('remainder');
}

/**
 * Метод для получения остатка для товара по plu.
 * @async
 * @param {string} item - plu товара.
 * @returns {Promise<Stock[]>}
 */
export const getRemainderByItemPlu = async (item) => {

    const stockRes = await Stock.findAll(
        {
            where: {
                item: item
            }
        }
    );
    if (!stockRes) {
        throw new NotFoundError('Stock not found.');
    }
    return stockRes;
}

/**
 * Метод для получения остатка для магазина по id.
 * @async
 * @param {number} shop - id магазина.
 * @returns {Promise<Stock[]>}
 */
export const getRemainderByShopId = async (shop) => {
    const stockRes = await Stock.findAll(
        {
            where: {
                shop: shop
            }
        }
    );
    if (!stockRes) {
        throw new NotFoundError('Stock not found.');
    }
    return stockRes;
}

/**
 * Метод для получения записи транзакции определённого товара для определённого магазина.
 * @async
 * @param {number} shop - id магазина.
 * @param {string} item - plu товара.
 * @returns {Promise<Stock>}
 */
export const getStock = async (shop, item) => {

    const stockRes = await Stock.findOne(
        {
            where: {
                shop: shop,
                item: item
            }
        }
    );
    if (!stockRes) {
        throw new NotFoundError('Stock not found.');
    }
    return stockRes;
}

export const getAllRemainders = async () => {
    const remainders = await Stock.findAll();
    if (!remainders) {
        throw new NotFoundError('Stocks not found');
    }
    return remainders;
}