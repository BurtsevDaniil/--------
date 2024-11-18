import { DataTypes, Model } from 'sequelize'
import { SequelizeConnection } from '../../services/SequelizeConnection.js'
import * as crypto from 'crypto'

/**
 * Модель товаров.
 * @param {string} plu - артикул товара.
 * @param {string} name - название товара.
 */
export class Item extends Model {
    plu;
    name;
}

const sequelize = SequelizeConnection.getInstance();

const generateToken = () => {
    return crypto.randomBytes(10).toString('hex');
}

Item.init(
    {
        plu: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: () => {
                return generateToken();
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: sequelize,
        tableName: 'items',
        modelName: 'Item',
        timestamps: false,
    },
);

await Item.sync();
Item.afterSync('Item table created successfully on sync.');