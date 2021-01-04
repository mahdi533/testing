var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
var User = require('../models/user');

const jwtsecure =require('../jwtsecure/jwt')
const nodemailer = require("nodemailer");

//add user
router.post('/addUser',(req, res, next) => {

  const user = new User(req.body)
  user.save().then((u) => {
    console.log("user created");
    res.status(201).json({
      message: "user created",
      user: u
    })
  }).catch(err => {
    console.log(err);
  })

 
})
// get all
router.get('/allUsers', (req, res, next) => {

  User.find().then((u) => {
    res.status(200).json({
      message: "all users",
      user: u
    })
  }).catch(err => {
    console.log(err);
  });

})

// get by id
router.get('/getUserById/:id', (req, res) => {
 
  User.findById(req.params.id).then((u) => {
    res.status(200).json({
      message: "all users",
      user: u
    })
  }).catch(err => {
    console.log(err);
  });


})



module.exports = router;
