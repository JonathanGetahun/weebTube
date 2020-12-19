const { User } = require('../models/User');


    //to check if we are authenticated or not
    //w_auth is from generateToken method from logging in and saving token in cookie
let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  //look for user by token, from schema static method.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };