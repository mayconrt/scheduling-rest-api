const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const professional = require('./routes/professional')
const services = require('./routes/services')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/professional', professional)
app.use('/services', services)

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*') // Configurar para permitir apenas o servidor de prod
    res.header('Acess-Control-Allow-Header',
        'Origin', 'X-Requerested-with',
        'Content-Type', 'Accept', 'Authorization')

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
               
})

app.use((req, res, next) => {
    const erro = new Error('Not Found')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app