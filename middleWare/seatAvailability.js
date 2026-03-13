const Booking = require('../model/booking');

const seatAvailabilityMiddleware = async ( req, res, next) => {
    const { trainId, seatNumber } = req.body;
     
     try {
         
        const seatBooked = await Booking.findOne({
            train : trainId,
             seatNumber
        });

     } catch (error) {
           
        return res.status(500).json({
             success : false,
             message : "Internal Server Error",
        })
     }
     if(seatBooked){
           try {
               return res.status(400).json({
                 success : false,
                 message : 'seat is already booked',
               })
           } catch (error) {
               
             return res.status(500).json({
                  success : false,
                 message : 'Internal Server Error'
             });
            
           }
     }
     next();
};

module.exports = {
     seatAvailabilityMiddleware
}