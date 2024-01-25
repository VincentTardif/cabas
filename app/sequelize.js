require('dotenv').config()

const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
function connectionDatabase() {

    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            port: process.env.DB_PORT,
        }
        );
        // sequelize.authenticate().then(() => {
        //     console.log('Connection has been established successfully.');
        // }).catch((error) => {
        //     console.error('Unable to connect to the database: ', error);
        // });
        
    }
module.exports = connectionDatabase;
