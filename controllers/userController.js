// user.controller.js
const { messages } = require('../utils/messages');
const userService = require('../services/userService');

const userController = {
    async createUser(req, res) {
        const isCreated = await userService.createUser(req.body);
        if (!isCreated) {
            console.log(messages[2])
            return res.status(201).render('adminContext/userForm', {
                message: messages[2],
                class: 'alert alert-danger'
            });
        }

        return res.status(201).render('adminContext/adminPanel', {
            message: messages[1],
            class: 'alert alert-success'
        });
    },

    async updateUser(req, res) {
        const { id } = req.params;
        const updatedUser = await userService.updateUser(id, req.body);
        res.json(updatedUser);
    },

    async deleteUser(req, res) {
        const { id } = req.params;
        await userService.deleteUser(id);
        res.status(204).end();
    },

    async getUsers(req, res) {
        const users = await userService.getUsers();
        res.json(users);
    }
};

module.exports = userController;
