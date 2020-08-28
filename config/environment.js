const fs=require("fs");
const rfs=require("rotating-file-stream");
const path=require("path");

const logDirectory=path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);

const accessLogStream= rfs.createStream('access.log',{
  interval:"1d",
  path:logDirectory

});

const production={

    name:"production",
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db:process.env.CODEIAL_DB,
    smtp:{
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587, //port for TLS ,foer more details check gmail smtp settings
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.CODEIAL_USER, // generated ethereal user
          pass: process.env.CODEIAL_PASS, // generated ethereal password
        }
      },

    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_clientSecret: process.env.CODEIAL_GOOGLE_CLIENTSECRET,
    google_callbackURL: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret_or_key:process.env.CODEIAL_JWT_SECRET_OR_KEY,
    morgan:{

      mode:'combined',
      options:{stream:accessLogStream}
    }
    
};



module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined ?development:eval(process.env.CODEIAL_ENVIRONMENT);
