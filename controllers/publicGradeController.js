// grade.controller.js

const gradeService = require('../services/gradeService');
const { messages } = require('../utils/messages');

const gradeController = {
    async getGrades(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = 50;
        const { grades, totalPages } = await gradeService.getGrades(page, limit);
            res.render('grade', {
                grades: grades,
                currentPage: page,
                totalPages: totalPages
            });
    }
};

module.exports = gradeController;
