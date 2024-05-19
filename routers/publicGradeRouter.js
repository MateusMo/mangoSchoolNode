// grade.router.js

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/publicGradeController');

router.get('/', gradeController.getGrades);

module.exports = router;
