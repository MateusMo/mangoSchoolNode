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
        return await Contacts.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = contactRepository;