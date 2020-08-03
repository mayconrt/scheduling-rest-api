
const connection = require('../database/conection')

module.exports = {

    async index(request, response){

        const professional = await connection('professionals')
        .select('*')

        response.json(professional)
    },

    async professionalServices(request, response){

        const { idServices } = request.params

        const professional = await connection('professionalxservices')
        .join('professionals', 'professionals.id', 'professionalxservices.idProfessional')
        .where({ 'professionalxservices.idServices': idServices })
        .select('professionals.id', 'professionals.name', 'professionals.urlImage')

        response.json(professional)
    },    
    
    async create(request, response) {
        try {
            const { name, urlImage, idPlaces } = request.body

            const professional = await connection('professionals').insert({
                name,
                urlImage,
                idPlaces
            })

            if (professional) {
                return response.status(201).json({
                    message: 'Profissional incluído com sucesso.'
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

            const professional = await connection('professionals')
                .where({ 'id': id })
                .delete()

            if (professional) {
                return response.status(201).json({
                    message: 'Professional excluído com sucesso.'
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
            const { name, urlImage, idPlaces } = request.body

            const service = await connection('professionals').where('id', id)
                .update({
                    name,
                    urlImage,
                    idPlaces
                })

            if (service) {
                return response.status(201).json({
                    message: 'Profissional atualizado com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }    

}