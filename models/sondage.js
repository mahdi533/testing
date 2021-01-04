const mongoose = require('mongoose')

var schema = mongoose.Schema

var sondageSchema = new schema({
    titre :{type: String, required :true},
    description  : {type: String ,required :true},
    choix  : {type: Boolean},
    nombreDeVote: {type:Number }
   
})
module.exports = mongoose.model('Sondage',sondageSchema);