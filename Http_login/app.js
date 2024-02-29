const express = require('express')
const app = express()

const passport = require('passport')
const crypto = require('crypto')

const LocalStrategy = require('passport-local')
app.use(express.urlencoded({extended: false}))
passport.use(new LocalStrategy(function verify(username, password, cb) {

    if(username == 'adith' && password == 'password'){
        crypto.pbkdf2(password, '1234567890123', 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return cb(err); }
           
            return cb(null, {});
          });
}
else{
    return cb(null, false, { message: 'Incorrect username or password.' });
}

}));



// app.use(express.json)
app.set('view engine', 'ejs');

app.get('/login', (req,res) => {
    res.send(
    `<html>
        <title>Testing_auth</title>
            <body>
                <form method="post">
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button type="submit">submit pannu da venna</button>
                </form>
            </body>
    </html>`

    
    )
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/welcome',
    failureRedirect: '/adith'
  }));






app.listen(4000,()=>console.log('sever started'))