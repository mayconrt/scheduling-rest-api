const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {
            const { id } = request.params

            const services = await connection('userxservices')
                .where({ idUser: id })
                .select('*')

            if (services.length > 0) {
                return response.status(200).json(services)
            } else {
                return response.status(404).json({ error: 'Nenhum serviço encontrado.' })
            }

        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    },

    async create(request, response) {
        try {
            const { idUser, idServices } = request.body

            await idServices.forEach(async idServices => {

                const services = await connection('userxservices').insert({
                    idUser,
                    idServices
                }).then(res => {
                    return response.status(200).json('Serviços incluídos com sucesso.')
                }).catch(err => {
                    let message
                    if(err.code && err.code == '23503'){
                        message = 'Constraint error'
                    }else{
                        message = 'Erro ao tentar inserir serviço x usuário'
                    }
                    return response.status(500).json({ error: message })
                })

            })

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