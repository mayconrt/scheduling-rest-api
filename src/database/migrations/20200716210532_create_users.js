exports.up = function(knex) {

    return knex.schema.createTable('user', function (table) {
        table.increments()
        table.string('login').notNullable();
        table.string('password').notNullable();

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('user')
  
};