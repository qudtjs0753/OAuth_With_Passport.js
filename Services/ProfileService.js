const ProfileRepository = require('../repositories/ProfileRepository');

const getUserProfile = async(req, res, next) => {
    try{
        const user = await ProfileRepository.getUserByUserId(req.session.passport.user);
        //profile.ejs에 user object를 넘긴다.
        res.render('profile', {user: user});
    }catch(err){
        console.error(err);
        next();
    }
};
const getUserProfileInHome = async(req, res, next) => {
    try{
        if(req.session.passport.user===!undefined &&req.session.passport.user===!null ){
            const user = await ProfileRepository.getUserByUserId(req.session.passport.user);
            return res.render('home', {user: user});
        }
        //profile.ejs에 user object를 넘긴다.
        res.render('home', {user: undefined});
    }catch(err){
        console.error(err);
        next();
    }
};

module.exports = {
    getUserProfile,
    getUserProfileInHome
}