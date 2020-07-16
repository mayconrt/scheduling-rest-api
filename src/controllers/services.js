
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {
            const services = await connection('services').select('*')
            return response.status(200).json(services)
        } catch(error) {
            return response.status(500).json({
                error: error
            })
        }
    },

    async create(request, response) {
        try {
            const { name, duration, value, description } = request.body

            const service = await connection('services').insert({
                name,
                duration,
                value,
                description
            })

            if (service) {
                return response.status(201).json({
                    message: 'Serviço incluído com sucesso.'
                })
            } else {
                return response.status(400).json({ error: error })
            }

        } catch (error) {
            return response.status(500).json({ error: error })
        }
    }
}