/**
 * Метод для получения размера заказа
 * @param {number} shop - id магазина
 * @param {string} item - plu товара
 * @returns 
 */
export const getOrderedAmount = async (shop, item) => {
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
    return stockRes.get('ordered_amount');
}