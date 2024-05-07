// user.controller.js

const userService = require('../services/userService');

const userController = {
    async createUser(req, res) {
        const isCreated = await userService.createUser(req.body);
        if(!isCreated){

        }

        res.status(201).render('adminContext/adminPanel');
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
