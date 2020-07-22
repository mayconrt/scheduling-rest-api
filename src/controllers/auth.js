
const connection = require('../database/conection')
const Password = require('../util/password')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = {

    async authenticate(request, response) {
        try {
            
            const { login, password } = request.body

            const [user] = await connection('user')
                .where('login', login)
                .select('*')
                
            if (user) {
                const passDecrypto = Password.descriptografar(user.password).toString()
                
                if (password == passDecrypto) {
                    const token = jwt.sign({id: user.id}, authConfig.secret, {
                        expiresIn: "86400"// Um dia
                    })
                    return response.status(200).json({
                        id: user.id,
                        token: token,
                        message: 'Usuário autenticado com sucesso.'
                    })
                }
            }

            return response.status(404).json({ message: 'Usuário ou senha invalidos' })

        } catch (error) {
            return response.status(500).json({ error: error, message: error.message })
        }

    }

}