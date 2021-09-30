const GoogleStrategy = require('passport-google-oauth20');
const AuthRepository = require('../../repositories/AuthRepository');
const env = require('../index');


module.exports = (passport) => {
    passport.use(
        new GoogleStrategy({
        //options for the google strategy. authenticate user with google
        //근데 왜 여기다가도 callbackURL 추가해야하죠? -> 이건 googleStrategy에게 어디로 redirect할지 알려줍니다.
        //처음 써서 성공하면 grant code 반환
        //두번째 성공하면 user profile 반환.
        callbackURL: '/auth/google/redirect',
        clientID: `${env.google.CLIENTID}`,
        clientSecret: `${env.google.CLIENTPASSWD}`
    }, async(accessToken, refreshToken, profile, done)=> {
        console.log(profile);
        let currentUser =await AuthRepository.getUserByUsername(profile.displayName);
        if(!currentUser){
            currentUser = await AuthRepository.signup({username:profile.displayName, googleId: profile.id});
        }
        done(null, currentUser);
    }))
}
