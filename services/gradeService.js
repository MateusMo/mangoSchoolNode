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

    async getGrades() {
        const grades = await gradeRepository.findAll();
        const gradeDataValues = grades.map(grade => {
            let dataValue = grade.dataValues;
            dataValue.date = moment(dataValue.date).format('MM/DD/YYYY');
            return dataValue;
        });
        gradeDataValues.sort((a, b) => {
            const dateA = moment(a.date, 'MM/DD/YYYY');
            const dateB = moment(b.date, 'MM/DD/YYYY');
            return dateB - dateA; 
        });
        return gradeDataValues;
    }
};

module.exports = gradeService;
