// user.router.js

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.post);

module.exports = router;