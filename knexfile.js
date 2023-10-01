'use strict';
const knex = require('knex');

require('dotenv').config();

const config = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DEV_DB_HOST,
            port: process.env.DEV_DB_PORT,
            user: process.env.DEV_DB_USER,
            password: process.env.DEV_DB_PASS,
            database: process.env.DEV_DB_NAME
        }
    },
    test: {
        client: 'mysql',
        debug: true,
        connection: {
            host: process.env.TEST_DB_HOST,
            port: process.env.TEST_DB_PORT,
            user: process.env.TEST_DB_USER,
            password: process.env.TEST_DB_PASS,
            database: process.env.TEST_DB_NAME
        },
        migrations: {
			tableName: process.env.DB_TABLE_MIGRATIONS,
		},
    },
    production: {
        client: 'mysql',
        connection: {
            host: process.env.PROD_DB_HOST,
            port: process.env.PROD_DB_PORT,
            user: process.env.PROD_DB_USER,
            password: process.env.PROD_DB_PASS,
            database: process.env.PROD_DB_NAME
        }
    }
};



module.exports = config[process.env.NODE_ENV];


