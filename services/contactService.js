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

    async delete(id) {
        try {
            return await contactRepository.delete(id);
        } catch (error) {
            console.error("Error in delete service:", error); 
            throw error; 
        }
    }
}

module.exports = contactService;