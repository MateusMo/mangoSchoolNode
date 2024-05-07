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

module.exports = { userExists };
