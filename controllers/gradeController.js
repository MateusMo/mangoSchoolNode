// grade.controller.js

const gradeService = require('../services/gradeService');

const gradeController = {
    async createGrade(req, res) {
        const newGrade = await gradeService.createGrade(req.body);
        res.status(201).json(newGrade);
    },

    async updateGrade(req, res) {
        const { id } = req.params;
        const updatedGrade = await gradeService.updateGrade(id, req.body);
        res.json(updatedGrade);
    },

    async deleteGrade(req, res) {
        const { id } = req.params;
        await gradeService.deleteGrade(id);
        res.status(204).end();
    },

    async getGrades(req, res) {
        const grades = await gradeService.getGrades();
        res.json(grades);
    }
};

module.exports = gradeController;
