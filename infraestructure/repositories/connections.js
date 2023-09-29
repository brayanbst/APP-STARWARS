const db = require('knex')({
  client: 'mysql',
  connection: {
    host : 'bd-starwars.ccjhunlkqus2.us-west-2.rds.amazonaws.com',
    port : 3306,
    user : 'admin',
    password : '12345678',
    database : 'db_starwars'
  }
});

module.exports = {
  db
};