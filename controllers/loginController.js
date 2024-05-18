const loginService = require('../services/loginService');

const post = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)

    try {
        const response = await loginService.verifyLogin(email, password);
        console.log(response)
        if (!response) {

        }
        
        res.render('adminContext/adminPanel');
    } catch (error) {

    }
};

module.exports = { post }