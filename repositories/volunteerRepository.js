const { Volunteer } = require('../models');

const volunteerRepository = {
    async create(volunteer){
        try {
            return await Volunteer.create(volunteer);
        } catch (error) {
            console.log(error);
        }
    },
    async getAll(){
        return Volunteer.findAll({
            order: [['createdAt', 'DESC']]
        })
    },
    async delete(id){
        return Volunteer.destroy({ where: { id } });
    }
};

module.exports = volunteerRepository; 