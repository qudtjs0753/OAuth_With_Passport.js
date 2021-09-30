const googleStrategy = require('./passport-setup');
const {getUserById} = require('../../repositories/AuthRepository');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async(id, done) => {
    const user = await getUserById(id);
    console.log(user);
    if(user)done(null, user.id);
    else done(false, user);
  })
  googleStrategy(passport);
};