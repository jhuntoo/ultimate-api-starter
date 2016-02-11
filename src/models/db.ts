import config from '../config/config';
import * as Sequelize from 'sequelize';
export default Db = new Sequelize(config.database, config.username, config.password);
