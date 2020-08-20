const express = require('express');
//const passport = require('passport');
const registroRoutes = express.Router();
//const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const bcryptSalt = 10;

registroRoutes.get('/login', (req, res, next) => {
  res.render('registro/login');
});

// registroRoutes.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "registro/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));

registroRoutes.get("/signup", (req, res, next) => {
  res.render("registro/signup");
});

registroRoutes.post("/signup", (req, res, next) => {
  const {username, email, password} = req.body;

  if (username === "" || password === "" || email === "") {
    res.render("registro/signup", { message: "Complete todos los campos..." });
    return;
  }

  User.findOne({ "username": `${username}` }, (err, user) => {
    if (user !== null) {
      res.render("registro/signup", { message: "El usuario ya existe" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email: email,
    });

    
    newUser.save((err) => {
      if (err) {
        res.render("registro/signup", { message: "Algo salió mal" });
      } else{
        res.render("/");
      }
    });
  });
});


module.exports = registroRoutes;