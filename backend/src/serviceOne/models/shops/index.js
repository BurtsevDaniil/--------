import { Model, DataTypes } from "sequelize";
import { SequelizeConnection } from "../../services/SequelizeConnection";

/**
 * Модель магазина.
 * @param {string} name - название магазина.
 */
export class Shop extends Model{
    name;
}

const sequelize = SequelizeConnection.getInstance();

Shop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize: sequelize,
        tableName: 'shops',
        modelName: 'Shop',
        timestamps: false
    }
);

await Shop.sync();
Shop.afterSync('Shop table created successfully on sync.');