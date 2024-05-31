const volunteerService = require('../services/volunteerService');
const messages = require('../utils/messages')


const volunteerController = {
    async create(req, res) {
        try {
            const  volunteer = req.body;
            await volunteerService.create(volunteer);
            res.render('volunteer',{
                message: messages[6],
                class: 'alert alert-successul'
            });
        } catch (error) {
            res.render('volunteer',{
                message: messages[5],
                class: 'alert alert-successul'
            });
        }
    },
    async getAll(req, res) {
        try {
            const volunteers = await volunteerService.getAll();
            res.render('adminContext/volunteerAd',{ volunteers:volunteers });
        } catch (error) {

        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            await volunteerService.delete(id);
            const volunteers = await volunteerService.getAll();
            res.render('adminContext/volunteerAd',{ volunteers:volunteers });
        } catch (error) {

        }
    }
};

module.exports = volunteerController;
