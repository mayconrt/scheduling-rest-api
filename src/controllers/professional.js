
const connection = require('../database/conection')

module.exports = {

    async index(request, response){

        const professional = await connection('professional')
        .select('*')

        response.json(professional)
    }     

}