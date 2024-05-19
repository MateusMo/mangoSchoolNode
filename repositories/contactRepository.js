const { Contacts } = require('../models');

const contactRepository = {
    async create(data) {
        return await Contacts.create(data);
    },
}

module.exports = contactRepository;