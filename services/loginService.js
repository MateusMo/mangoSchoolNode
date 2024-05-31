const loginRepository = require('../repositories/loginRepository');

const verifyLogin = async( email, password) => {
    // Verificar se o e-mail e a senha foram fornecidos
    if (!email || !password) {
        return res.status(400).json({ message: "E-mail and password are required." });
    }

     // Verificar se o e-mail ou a senha contêm caracteres de código SQL
     if (containsSQLInjection(email) || containsSQLInjection(password)) {
        return res.status(400).json({ message: "E-mail or password contains SQL injection." });
    }

    // Enviar os dados para o repositório para autenticação
    const response = await loginRepository.userExists(email, password);
    return response;
};

const isNewUserPassword = async(email,password) =>{
    return await loginRepository.isNewUserPassword(email,password);
};

// Função para verificar se uma string contém código SQL
const containsSQLInjection = (str) => {
    // Expressão regular para verificar caracteres de código SQL
    const sqlPattern = /(?:\b(SELECT|UPDATE|DELETE|INSERT|ALTER|CREATE|DROP)\b)|(?:--)|(\b(?:DROP|EXEC|TRUNCATE|ALTER|CREATE|UPDATE|INSERT|DELETE)\b)/i;
    return sqlPattern.test(str);
};

module.exports = { verifyLogin, isNewUserPassword };
