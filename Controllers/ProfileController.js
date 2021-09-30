const ProfileService = require('../Services/ProfileService');
const Auth = require('../middleware/auth');
const router = require('express').Router();

//Auth.authcheck : user loggin이 안되어있으면 redirect login.
router.get('/',Auth.authCheck, ProfileService.getUserProfile);


module.exports = router;