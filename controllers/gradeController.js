// grade.controller.js

const gradeService = require('../services/gradeService');
const { messages } = require('../utils/messages');

const gradeController = {
    async createGrade(req, res) {
        try {
            await gradeService.createGrade(req.body);
            res.render('adminContext/newGradeForm', {
                message: messages[4],
                class: 'alert alert-success'
            });
        } catch (error) {
            res.render('adminContext/newGradeForm', {
                message: messages[5],
                class: 'alert alert-danger'  // Corrigido para alertar erro
            });
        }
    },

    async updateGrade(req, res) {
        const { id } = req.params;''
        const updatedGrade = await gradeService.updateGrade(id, req.body);
        res.json(updatedGrade);
    },

    async deleteGrade(req, res) {
        const { id } = req.params;
        await gradeService.deleteGrade(id);
        const page = parseInt(req.query.page) || 1;
        const limit = 50;
        const grades = await gradeService.getGrades(page, limit);
        res.render('adminContext/grade', {
            grades: grades
        });
    },

    async getGrades(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = 50;
        const { grades, totalPages } = await gradeService.getGrades(page, limit);
        res.render('adminContext/grade', {
            grades: grades,
            currentPage: page,
            totalPages: totalPages
        });
    }
};

module.exports = gradeController;
