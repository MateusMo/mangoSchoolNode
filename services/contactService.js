const contactRepository = require('../repositories/contactRepository');

const contactService = {
    async create(data){
        return await contactRepository.create(data)
    },

    async get(){
        const contacts = await contactRepository.get();
        const contactsMapped = contacts.map(contact => {
            let maped = contact.dataValues;
            return maped
        })
        return contactsMapped;
    },

    async delete(id){
        return await contactRepository.delete(id);
    }
}

module.exports = contactService;