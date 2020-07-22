exports.up = function(knex) {

    return knex.schema.createTable('places', function (table) {
        table.increments()
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('id_schedule').notNullable();

        table.foreign('id_schedule').references('id').inTable('schedules');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('places')
  
};