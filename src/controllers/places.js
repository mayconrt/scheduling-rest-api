
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {
            const places = await connection('places').select('*')
            return response.status(200).json(places)
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    },

    async create(request, response) {
        try {
            const { name, address, id_schedule } = request.body

            const places = await connection('places').insert({
                name,
                address,
                id_schedule
            })

            if (places) {
                return response.status(201).json({
                    message: 'Unidade incluída com sucesso.'
                })
            } else {
                return response.status(400).json({ error: error })
            }

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params

            const service = await connection('services')
                .where({ 'id': id })
                .delete()

            if (service) {
                return response.status(201).json({
                    message: 'Serviço deletado com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    },

    async update(request, response) {

        try {
            const { id } = request.params
            const { name, duration, value, description } = request.body

            const service = await connection('services').where('id', id)
                .update({
                    name,
                    duration,
                    value,
                    description
                })

            if (service) {
                return response.status(201).json({
                    message: 'Serviço atualizado com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }

}