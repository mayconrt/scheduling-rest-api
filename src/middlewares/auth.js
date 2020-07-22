const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader){
        return res.status(401).send({error: "No token provided"})
    } 

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({error: "Token invalid"})
        } 

        req.id = decoded.id

        return next()
    })

}