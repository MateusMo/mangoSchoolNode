// grade.service.js

const gradeRepository = require('../repositories/gradeRepository');
const moment = require('moment');

const gradeService = {
    async createGrade(gradeData) {
        return gradeRepository.create(gradeData);
    },

    async updateGrade(id, gradeData) {
        return gradeRepository.update(id, gradeData);
    },

    async deleteGrade(id) {
        return gradeRepository.delete(id);
    },

    async getGrades(page, limit) {
        const offset = (page - 1) * limit;
        const { grades, count } = await gradeRepository.findAllWithPagination(limit, offset);

        const formattedGrades = grades.map(grade => {
            let dataValue = grade.dataValues;
            dataValue.date = moment(dataValue.date).format('MM/DD/YYYY');
            return dataValue;
        });

        formattedGrades.sort((a, b) => {
            const dateA = moment(a.date, 'MM/DD/YYYY');
            const dateB = moment(b.date, 'MM/DD/YYYY');
            return dateB - dateA; 
        });

        const totalPages = Math.ceil(count / limit);
        return { grades: formattedGrades, totalPages: totalPages };
    }
};

module.exports = gradeService;
