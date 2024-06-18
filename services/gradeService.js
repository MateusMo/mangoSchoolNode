// grade.service.js

const gradeRepository = require('../repositories/gradeRepository');
const moment = require('moment');

const gradeService = {
    async createGrade(gradeData) {
        return gradeRepository.create(gradeData);
    },

    async updateGrade(id, gradeData) {
        const oldGrade = await this.getGradeById(id);
        const newGrade = {
            studentName: gradeData.studentName || oldGrade.studentName,
            className: gradeData.className || oldGrade.className,
            date: gradeData.date || oldGrade.date,
            arith: gradeData.arith || oldGrade.arith,
            kus: gradeData.kus || oldGrade.kus,
            he: gradeData.he || oldGrade.he,
            sa: gradeData.sa || oldGrade.sa,
            writ: gradeData.writ || oldGrade.writ,
            read: gradeData.read || oldGrade.read,
            total: gradeData.total || oldGrade.total,
            ave: gradeData.ave || oldGrade.ave,
            updatedAt: new Date(),
        };
        return gradeRepository.update(id, newGrade);
    },

    async getGradeById(id){
        let grade = await gradeRepository.getGradeById(id);
        let dataValue = grade.dataValues;
        const formattedDate = dataValue.date.toISOString().split('T')[0];
        dataValue.date = formattedDate;
        return dataValue;
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
