import { Item } from ".."

/**
 * Метод для добавления товара в базу данных.
 * @async
 * @param {string | undefined} plu - артикул товара.
 * @param {string} name - название товара.
 */
export const addItem = async (plu, name) => {
    console.log(plu, name)
    plu ? await Item.create({plu: plu, name: name}) : await Item.create({name:name});
}