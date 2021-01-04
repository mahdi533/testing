var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
var Sondage = require('../models/sondage');
var User = require('../models/user');

const jwtsecure =require('../jwtsecure/jwt')
const nodemailer = require("nodemailer");

//add sondage
router.post('/addSondage', (req, res, next) => {

    const sondage = new Sondage({
      titre:req.body.titre,
      description:req.body.description,
      choix: false,
      nombreDeVote:0,
      idsondage:req.params.id,
    })
    sondage.save().then((u) => {
      console.log("Sondage created");
      res.status(201).json({
        message: "Sondage created",
        sondage: u
      })
    }).catch(err => {
      console.log(err);
    })
  })
  //get all sondage
  router.get('/allSondage', (req, res, next) => {
     Sondage.find().then((u) => {
      res.status(200).json({
        message: "all Sondage",
        sondage: u
      })
    }).catch(err => {
      console.log(err);
    });
  
  });
// update sondage
  router.put('/updateSondage/:idSondage/:idUsers',(req,res,next)=>  {
    User.findById(req.params.idUsers).then((u)=>{
        console.log(u);
  const nbr = u.nbrVote;
  if ( nbr < 6 ){
    User.findByIdAndUpdate(req.params.idUsers,{ nbrVote: nbr +1}).then(()=>{
          }).catch((err)=>{
            res.status(400).json({
              error: err
            });
          }).then(()=>{
            Sondage.findById(req.params.idSondage).then((u)=>{
              const nomber = u.nomberDeVote;
              Sondage.findByIdAndUpdate(req.params.idSondage,
                {
                  choix: true,
                  nomberDeVote: nomber + 1,
                }).then(()=>{
                  res.status(201).json({
                    message: "updated successfully sondage !",
                  })
                }).catch((err)=>{
                  res.status(400).json({
                  error: err  
                  });
                });
             });
                  
          })
  }else{
      res.status(400).json({
          message: " 5 ! ",
      })
  }
})
  });





  module.exports = router;