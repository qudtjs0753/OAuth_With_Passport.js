const express = require('express');
const AuthController = require('./Controllers/AuthController');
const ProfileController = require('./Controllers/ProfileController');
const passport = require('passport');
const env = require('./config/index')
const googlePassport = require('./config/passport/passportIndex'); //이거 추가해줘야 passport에서 google strategy를 인식한다.
const cookieSession = require('cookie-session');
const ProfileService = require('./Services/ProfileService');

const app = express();


//set up view engine
app.set('view engine', 'ejs');

googlePassport(passport);

//config cookie
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [env.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', AuthController);
app.use('/profile', ProfileController);
//create home route
app.get('/',ProfileService.getUserProfileInHome);


app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});

