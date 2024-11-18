import { DataTypes, Model } from "sequelize";
import { SequelizeConnection } from "../../services/SequelizeConnection";
import { Item } from "../items";
import { Shop } from "../shops";

/**
 * Модель остатков.
 * @param {Item} item - plu товара.
 * @param {Shop} shop - id магазина.
 * @param {number} remainder - остаток товара.
 * @param {number} ordered_amount - количество товара в заказе.
 */
export class Stock extends Model{
    item;
    shop;
    remainder;
    ordered_amount;
}

const sequelize = SequelizeConnection.getInstance();

Stock.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        item: {
            type: DataTypes.STRING,
            references: {
                model: Item,
                key: 'plu'
            }
        },
        shop: {
            type: DataTypes.INTEGER,
            references: {
                model: Shop,
                key: 'id'
            }
        },
        remainder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        ordered_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize: sequelize,
        tableName: 'stocks',
        modelName: 'Stock',
        timestamps: false
    }
);

await Stock.sync();
Stock.afterSync('Stock table created successfully on sync.');