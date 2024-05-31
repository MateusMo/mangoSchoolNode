const loginService = require('../services/loginService');
const userService = require('../services/userService')

const post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUserObj = await loginService.isNewUserPassword(email,password);
        if(newUserObj.userFound){
            return res.render('adminContext/changePass',{email:newUserObj.email});
        }

        const response = await loginService.verifyLogin(email, password);
        if (!response) {
            return res.render('login');
        }
        
        const user = await userService.findUserByEmail(email);
        req.session.user = user;
        res.render('adminContext/adminPanel');
    } catch (error) {
        return res.render('login');
    }
};

module.exports = { post }