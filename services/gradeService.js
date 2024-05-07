// grade.service.js

const gradeRepository = require('../repositories/gradeRepository');

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
        return gradeRepository.findAll();
    }
};

module.exports = gradeService;
