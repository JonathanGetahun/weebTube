const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
})

//hashes password before user document is saved
userSchema.pre('save', function( next ) {
    var user = this;
    
    //only when password is modified or change
    if(user.isModified('password')){   
        // console.log('password changed')
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err); //if it doesnt work then it skips save
    
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash 
                next();
            })
        })
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

//generates json web token when user is logging in and saves it to user document
userSchema.methods.generateToken = function(cb) {
    var user = this;
    // console.log('user',user)
    // console.log('userSchema', userSchema)
    var token =  jwt.sign(user._id.toHexString(),'secret')
    var oneHour = moment().add(1, 'hour').valueOf();
    
    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

//statics same as method but allow for defining functions that are directly on the model
//compared to just the instance. 
userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    //verify decodes token, it will give user_id since thats what we used to create it
    jwt.verify(token,'secret',function(err, decode){
        //searches for this user with user_id and token
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }