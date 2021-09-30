const router = require('express').Router();
const passport = require('passport');
const AuthService = require('../Services/AuthService');

router.get('/signup', AuthService.signUp);

//auth login
router.get('/login', (req,res) => {
    res.render('login');
})

//auth logout
router.get('/logout', AuthService.logOut);

//auth with google
router.get('/google',AuthService.getKeyFromGoogle);

//callback route for google redirect to
//여기서 한번 더 authentiate를 불렀는데 차이가 뭐냐. 여기는 url에 code가 있음.
router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    console.log(req.body);
    res.redirect('/profile/');
});


module.exports = router;