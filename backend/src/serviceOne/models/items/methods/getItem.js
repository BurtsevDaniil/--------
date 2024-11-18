import { Item } from ".."
import { NotFoundError } from "../../../../config/errors";

/**
 * Метод для получения товара по артикулу.
 * @async
 * @param {string} plu - артикул товара.
 * @returns {Promise<Item>}
 */
export const getItemByPLU = async (plu) => {
    const item = await Item.findOne(
        {
            where: {
                plu: plu
            }
        }
    );
    if (!item) {
        throw new NotFoundError('Item not found.');
    }
    return item;
}

/**
 * Метод для получения товара по названию.
 * @async
 * @param {string} name - название товара.
 * @returns {Promise<Item>}
 */
export const getItemByName = async (name) => {
    const item = await Item.findOne(
        {
            where: {
                name: name
            }
        }
    );
    if (!item) {
        throw new NotFoundError('Item not found.');
    }
    return item;
}

export const getAllItems = async () => {
    const items = await Item.findAll();
    if (!items) {
        throw new NotFoundError('Items not found.');
    }
    return items;
}