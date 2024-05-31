// user.router.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/updateDataNewUser', userController.updateDataNewUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/', userController.getUsers);


module.exports = router;
