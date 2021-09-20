const Sequelize = require('sequelize');

const setUpDatabase = () => {
    const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST, 
        port: DB_PORT,
        dialect: 'mysql',
        logging: false,
    });
    connection.sync({ alter: true });
    return {};
};

module.exports = setUpDatabase();