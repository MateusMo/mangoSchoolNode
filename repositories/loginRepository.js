const { User } = require('../models');

const userExists = async (email, password) => {
    // Encontrar um usuário com o mesmo e-mail e senha fornecidos
    const user = await User.findOne({ where: { email, password } });
    // Se não houver usuário encontrado, enviar uma mensagem de erro
    if (!user) {
        return false;
    }
    // Se o usuário for encontrado, enviar os detalhes do usuário como resposta
    return true;
};

const isNewUserPassword = async (email, password) => {
    const hashPassword = '$2b$10$3CqdHT7pP26YhZ7m3Z/V6.CaCZT5i.ZCtKPxMm4ByTOHNvFPOVCNa';
    const user = await User.findOne({
        where: {
            email,
            password: hashPassword
        }
    });
    let newUserObj = { email:email, userFound: user && email != "admin@admin.com" ? true : false }
    return newUserObj;
}

module.exports = { userExists, isNewUserPassword };
