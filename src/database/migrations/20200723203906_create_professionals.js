exports.up = function(knex) {

    return knex.schema.createTable('professionals', function (table) {
        table.increments()
        table.string('name').notNullable();
        table.string('urlImage').notNullable();
        table.integer('idPlaces').notNullable();

        table.foreign('idPlaces').references('id').inTable('places');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('professionals')
  
};