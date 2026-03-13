const mongoose = require('mongoose');

const BookingSchema  = new mongoose.Schema(
    {
      userId : mongoose.Schema.Types.ObjectId,
    },
     {
      trainId : mongoose.Schema.Types.ObjectId,
     },
     {
        seatNumber : Number,
        required : true,

     },
     {
         journeyDate : String,
         required : true,
     },
     {
         status : { 
             type : String ,
            default : "CONFIRMED",
            }
     },
     {
         type : Date,
         default : Date.now,
     },

    
      {
         timestamps : true,
      },
    
     

);

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;