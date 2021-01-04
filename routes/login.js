var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/login', (req, res, next) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }).then((u) => {
      res.status(200).json({
        message: "user accepte ce login",
        user: u
      })
    }).catch(err => {
      console.log(err);
    });

  });

module.exports = router;