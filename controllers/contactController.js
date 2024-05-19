const contactService = require('../services/contactService');
const messages = require('../utils/messages')

const contactController = {
    async create(req,res){
        try {
            await contactService.create(req.body);
            return res.render('contact',{
                message: messages[6],
                class: 'alert alert-successul'
            });
        } catch (error) {
            console.error('Erro ao criar contato:', error);
            // Se ocorrer um erro, você pode renderizar uma página de erro ou redirecionar para a página anterior, por exemplo.
            return res.status(500).send('Ocorreu um erro ao processar sua solicitação.');
        }
    }
};

module.exports = contactController;