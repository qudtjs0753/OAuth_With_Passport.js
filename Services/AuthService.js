const AuthRepository = require('../repositories/AuthRepository');
const passport = require('passport');

const signUp = async (req, res, next) => {
    try{
        const user = AuthRepository.signup(req.body);
        if(!user){
            res.status(400).send('잘못된 요청입니다.');
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        console.error(err);
    }
}


const getKeyFromGoogle = async(req,res,next) => {
    try{
        passport.authenticate('google', {
            //
            scope: ['profile']
        })(req,res,next);
    }catch(err){
        console.error(err);
        next();
    }
}

const getUserInfoFromGoogle = async(req,res,next) => {
    try{
        passport.authenticate('google')(req,res,next);
    }catch(err){
        console.error(err);
    }
}

const logOut = async(req, res, next) => {
    try{
        //세션 자체가 없어지지 않음.
        //세션 스토리지에 있던 유저정보가 없어지는듯.
        //세션 자체를 없애려고한다면 session.destroy를 하면 됨. -> express session거임.
        req.logOut();
        res.redirect('/');
    }catch(err){
        console.error(err);
        next();
    } 
}

module.exports = {
    signUp,
    getKeyFromGoogle,
    getUserInfoFromGoogle,
    logOut
}