const express = require('express');
const env = require('./config/index')
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup'); //이거 추가해줘야 passport에서 google strategy를 인식한다.
const app = express();
const mongoose = require('mongoose');



//set up view engine
app.set('view engine', 'ejs');

//connect mongodb
mongoose.connect(`${env.MONGODB}`, () => {
    console.log('connected to mongoDB');
});

//set up routes
app.use('/auth', authRoutes);

//create home route
app.get('/',(req, res) => {
    res.render('home');
});


app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});

