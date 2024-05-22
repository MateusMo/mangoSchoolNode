const { Contacts } = require('../models');

const contactRepository = {
    async create(data) {
        return await Contacts.create(data);
    },

    async get(){
        return await Contacts.findAll({
            order: [['createdAt', 'DESC']]  
        });
    },

    async delete(id) {
        try {
            return await Contacts.destroy({
                where: { id: id }
            });
        } catch (error) {
            console.error("Error in delete repository:", error); // Log the error
            throw error; // Rethrow the error to be caught by the service
        }
    }
}

module.exports = contactRepository;