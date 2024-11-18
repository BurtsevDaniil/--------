import { Shop } from "..";
import { NotFoundError } from "../../../../config/errors";

/**
 * Метод для получения записи магазина.
 * @async
 * @param {string} name - название магазина.
 * @returns {Promise<Shop>}
 */
export const getShop = async (name) => {
    const shop = await Shop.findOne(
        {
            where: {
                name: name,
            }
        }
    );
    if (!shop) {
        throw new NotFoundError('Shop not found');
    }
    return shop;
}

export const getAllShops = async () => {
    const shops = await Shop.findAll();

    if(!shops) {
        throw new NotFoundError('Shops not found');
    }
    return shops;
}