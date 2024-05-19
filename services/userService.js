// user.service.js

const userRepository = require('../repositories/userRepository');

const userService = {
    async createUser(userData) {
        if (!isValidPassword(userData.password)) {
        return false;    
        }
        return userRepository.post(userData);
    },

    async updateUser(id, userData) {
        if (!isValidPassword(userData.password)) {
            throw new Error('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
        }
        return userRepository.put(id, userData);
    },

    async deleteUser(id) {
        return userRepository.deleteUser(id);
    },

    async getUsers() {
        return userRepository.getUsers();
    },

    async findUserByEmail(email) {
        const user = await userRepository.findByEmail(email);
        return user ? user.dataValues : null;
    }

    
};

// Função para validar a força da senha
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
}

module.exports = userService;
