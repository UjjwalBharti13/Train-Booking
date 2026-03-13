const mongoose = require('mongoose');
 
const seatSchema = new mongoose.Schema({
     trainId : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'train',
        required : true
     },
      seatNumber : {
         type : Number,
         required : true
      },
      journeyDate : {
         type : String,
         required : true
      },

      isBooked : {
         type : Boolean,
         default : false
      },

      createdAt : {
           type : Date,
           default : Date.now
      },



});

const Seat = mongoose.model('seat',seatSchema);
module.exports = Seat;