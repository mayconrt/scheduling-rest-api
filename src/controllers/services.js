
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {
            const services = await connection('services').select('*')
            return response.status(200).json(services)
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    },

    async servicesPlaces(request, response) {

        const { idPlaces } = request.params

        try {
            const services = await connection('services')
            .where({ 'idPlaces': idPlaces })
            .select('*')
            return response.status(200).json(services)
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    },    

    async create(request, response) {
        try {
            const { name, duration, value, description, idPlaces } = request.body

            const service = await connection('services').insert({
                name,
                duration,
                value,
                description,
                idPlaces
            })

            if (service) {
                return response.status(201).json({
                    message: 'Serviço incluído com sucesso.'
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