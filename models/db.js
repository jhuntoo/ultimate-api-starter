import config from '../config/config.json'
export default Db = new Sequelize('mydb', 'myuser', 'mypass', {
    dialect: 'sqlite',

    storage: 'mydb.sqlite'
});
