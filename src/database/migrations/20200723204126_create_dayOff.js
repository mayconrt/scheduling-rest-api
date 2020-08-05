exports.up = function(knex) {

    return knex.schema.createTable('dayOff', function (table) {
        table.increments()
        table.string('startDate').notNullable();
        table.string('endDate').notNullable();;
    
        table.integer('idProfessionals').notNullable();

        table.foreign('idProfessionals').references('id').inTable('professionals');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('dayOff')
  
};