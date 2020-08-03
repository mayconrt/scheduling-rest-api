exports.up = function(knex) {

    return knex.schema.createTable('professionalxservices', function (table) {
        table.increments()

        table.integer('idProfessional').notNullable();
        table.integer('idServices').notNullable();

        table.foreign('idProfessional').references('id').inTable('professionals');
        table.foreign('idServices').references('id').inTable('services');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('professionalxservices')
  
};