const mongoose = require('mongoose')

var schema = mongoose.Schema

var userSchema = new schema({
    firstName :{type: String, required :true},
    lastName : {type: String ,required :true},
    email : {type: String ,required : true},
    passeword : {type: String ,required : true},
    num : {type: Number ,required : true},
    nombreDeVote: {type:Number },
    
})
module.exports = mongoose.model('User',userSchema);