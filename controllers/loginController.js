const loginService = require('../services/loginService');
const userService = require('../services/userService')

const post = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)

    try {
        const response = await loginService.verifyLogin(email, password);
        console.log(response)
        if (!response) {

        }
        const user = await userService.findUserByEmail(email);
        req.session.user = user;
        res.render('adminContext/adminPanel');
    } catch (error) {

    }
};

module.exports = { post }