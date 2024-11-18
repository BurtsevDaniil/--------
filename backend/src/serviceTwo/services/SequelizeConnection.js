import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER, SRV2_SCHEME } from "../../config/enviroment";

/**
 * Класс для подключения к бд. Нужен, чтобы подключение было синглтоном.
 * @param {Sequelize} instance - текущее подключение.
 */
export class SequelizeConnection {
    /**
     * @private
     * @type {Sequelize}
     */
    static instance;

    /**
     * @private
     */
    constructor() {
        SequelizeConnection.instance = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
            dialect: 'postgres',
            host: DB_HOST,
            port: DB_PORT, 
            logging: (sql) => console.log(sql),
            schema: SRV2_SCHEME
        });
        
        SequelizeConnection.instance.authenticate().then(async () => {
            console.log('Connected to db successfully.');
        })
        .catch((e) => {
            console.error(`Connection to db failed. Reason: ${e}`);
        });
    }

    /**
     * Метод для получения текущего подключения.
     * @public
     * @returns {Sequelize}
     */
    static getInstance() {
        if (!SequelizeConnection.instance){
            new SequelizeConnection();
        }
        return SequelizeConnection.instance;
    }
}