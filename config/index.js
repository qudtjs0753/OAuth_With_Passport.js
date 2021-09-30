const dotenv = require('dotenv');


dotenv.config();
const env = process.env;
module.exports =  {
    google: {
        CLIENTID : env.CLIENTID,
        CLIENTPASSWD: env.CLIENTPASSWD,
    },
    session: {
        cookieKey: env.COOKIEKEY,
    }
  };