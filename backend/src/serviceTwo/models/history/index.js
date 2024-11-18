import { Model, DataTypes, Sequelize } from "sequelize";
import { Actions } from "../../../../shared/types";
import { SequelizeConnection } from "../../services/SequelizeConnection";

/**
 * Модель истории действий
 * @param {number} shopId - id магазина
 * @param {string} plu - plu товара
 * @param {Date?} date - дата действия
 * @param {string} action - тип действия
 */
export class History extends Model {
    shopId;
    plu;
    date;
    action;
}

const sequelize = SequelizeConnection.getInstance();

History.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shopId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        plu: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: sequelize,
        tableName: 'history',
        modelName: 'History',
        timestamps: false
    }
)

await History.sync();
History.afterSync('History created on sync.');