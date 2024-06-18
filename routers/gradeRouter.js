// grade.router.js

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.post('/', gradeController.createGrade);
router.get('/getGradeToUpdate/:id', gradeController.getGradeToUpdate);
router.post('/update/:id',gradeController.updateGrade);
router.delete('/:id', gradeController.deleteGrade);
router.get('/', gradeController.getGrades);

module.exports = router;
