const contactRepository = require('../repositories/contactRepository');

const contactService = {
    async create(data){
        return await contactRepository.create(data)
    }
}

module.exports = contactService;