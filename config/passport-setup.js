const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const env = require('./index');


passport.use(
    new GoogleStrategy({
    //options for the google strategy. authenticate user with google
    //근데 왜 여기다가도 callbackURL 추가해야하죠?
    callbackURL: '/auth/google/redirect',
    clientID: `${env.google.CLIENTID}`,
    clientSecret: `${env.google.CLIENTPASSWD}`
}, (accessToken, refreshToken, profile, done)=> {
    //passport callback function
    console.log('passport callback function fired');
    console.log(profile);
}))