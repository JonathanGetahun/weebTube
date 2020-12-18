const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { User } = require('./models/user');
const user = require('./models/user');

mongoose.connect(config.mongoURI,
     { useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log('DB connected')
}).catch(err => console.error(err))

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); //parses cookies attached to the client request object


app.get("/api/user/auth", (req,res) => {

})

app.post('/api/users/register', authenticated (req,res) => {
    const user = new User(req.body);
    
        user.save((err, doc) => {
            if(err) return res.json({sucess:false, err})
            return res.status(200).json({
                success:true,
                userData: doc
            })
        })

})

app.post('/api/user/login', (req,res) => {
    //find the email
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            //we put the token in the cookie
            //if you remove user.token or cookie, it will log out
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
})



app.listen(5000);