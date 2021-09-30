const authCheck = (req, res, next) => {
    console.log(req.session.passport);
    if(req.session.passport.user===undefined){
        //if user is not logged in
        res.redirect('/auth/login');
    }else{
        //if logged in
        next();
    }
};

module.exports = {
    authCheck
}