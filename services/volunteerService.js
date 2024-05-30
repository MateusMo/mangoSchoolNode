const volunteerRepository = require('../repositories/volunteerRepository');

const volunteerService = {
    async create(volunteer) {
        try {
            const { checkbox, ...otherFields } = volunteer;
            const sanitizedData = {
                ...otherFields,
                checkbox: checkbox === 'on',  
            };
            return await volunteerRepository.create(sanitizedData);
        } catch (error) {
            console.error(error);
            throw error;  
        }
    },
    async getAll(){
        const volunteers = await volunteerRepository.getAll();
        const volunteersFormatted = volunteers.map(vol => {
            let dataValues = vol.dataValues;
            return dataValues;
        });
        return volunteersFormatted;
    },
    async delete(id){
        return await volunteerRepository.delete(id);
    }
};

module.exports = volunteerService;