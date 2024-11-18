import { Stock } from "..";
import { AlreadyExistsError, ValidationError } from "../../../../config/errors";
import { Actions } from "../../../../../shared/types";
import { saveHistory } from "../../../services/saveHistory";
import { getItemByName } from "../../items/methods/getItem";
import { getShop } from "../../shops/methods/getShop";
import { Error, ForeignKeyConstraintError } from "sequelize";

/**
 * Метод для создания остатка.
 * @async
 * @param {string} item - plu товара.
 * @param {number} shop - id магазина.
 * @param {number} amount - количество в остатке.
 */
export const createRemainder = async (item, shop, amount) => {
    
    try {
        const [stock, created] = await Stock.findOrCreate(
            {
                where: {
                    item: item,
                    shop: shop
                },
                defaults: {
                    item: item,
                    shop: shop,
                    remainder: amount
                }
            }
        );
        if (created) {
            console.log('Created remainder for', shop, item);
        } else {
            throw new AlreadyExistsError('This remainder already exists.');
        }
        
        await saveHistory({
            shopId: shop,
            plu: item,
            action: Actions.addRemainder
        });
    } catch (e) {
        if (e instanceof ForeignKeyConstraintError) {
            throw new ValidationError('Entry with this foreign key does not exist.');
        }
        throw e;
    }
    

   
}