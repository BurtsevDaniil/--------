import { Shop } from ".."

/**
 * Метод для создания магазина.
 * @async
 * @param {string} name - название магазина.
 */
export const addShop = async (name) => {
    await Shop.create({name: name});
}