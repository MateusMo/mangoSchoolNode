const logout = (req,res)=>{
    req.session.user = null;
    res.render('home');
};

module.exports = {logout}