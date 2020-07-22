const crypto = require("crypto");

const DADOS_CRIPTOGRAFAR = {
    algoritmo: "aes256",
    codificacao: "utf8",
    segredo: "chaves",
    tipo: "hex"
};

module.exports = {

    generate() {
        password = senha = crypto.randomBytes(6).toString('HEX')
        return password
    },

    criptografar(senha) {
        const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        cipher.update(senha);
        return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
    },

    descriptografar(senha) {
        const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
        return decipher.final();
    },

    validate(password) {
        const regexNumber = /[0-9]/
        const regexUpper = /[A-Z]/
        var passwordValidate = true        


        if (password.length != 6)
            passwordValidate = false
        if (!regexNumber.test(password))
            passwordValidate = false
        if (!regexUpper.test(password))
            passwordValidate = false
    
      return passwordValidate     
    }

}