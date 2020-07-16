// Update with your config settings.

const { eventNames } = require("./src/database/conection");

module.exports = {

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'scheduling',
  //     user: 'postgres',
  //     password: 'maycon123'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: "./src/database/migrations"
  //   },
  //   useNullAsDefault: true,
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  development: {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  }

}
