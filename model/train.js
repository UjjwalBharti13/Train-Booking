const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
     trainNumber :{
         type : String,
         required : true,
         unique: true
     },
     trainName : {
         type : String,
         required : true,

     },
     type : {
         type : String,
         enum : ["LUXURY" , "EXPRESS", "LOCAL"]
         
     },
     source : {
        type : String,
        required : true 
     },
     destination : {
         type : String,
         required : true
     },
     departureTime : {
        type : String,
        required : true
     },
     arrivalTimne : {
         type : String,
         required : true
     },
     runningDays : {
         type : [String],
         required : true
     },
     createdAt : {
         type : Date,
         default : Date.now
     }
});

const Train = mongoose.model('train', trainSchema);
module.exports = Train;