const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { route } = require('./userRouter');

router.post('/create', contactController.create);
router.get('/',contactController.get);
router.delete('/:id',contactController.delete);

module.exports = router;
