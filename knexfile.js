// Update with your config settings.
module.exports = {

  development: {
    client: "postgres",
    connection: {
      database: 'scheduling',
      user: 'postgres',
      password: 'maycon123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  }

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

//   development: {
//     client: 'mysql',
//     connection: process.env.CLEARDB_DATABASE_URL,
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       directory: "./src/database/migrations"
//     },
//     useNullAsDefault: true,
//   }

}
