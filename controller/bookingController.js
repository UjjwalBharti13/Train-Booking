const Booking = require('../model/booking');
const Train = require('../model/train');

const createBooking = async (req, res) => {
     
     try {
         const {trainId } = req.body;
        const userId = req.user.userId;
           
         // ATOMIC SEAT DECREMENT AND BOOKING CREATION 
           const train = await Train.findOneAndUpdate(
                { _id : trainId , availabelSeat : {$gt : 0}},
                { $inc : {availabelSeat : -1}},
                { new :true}
           ); 
          if(!train){
             try {
                  return res.status(400).json({ 
                    success : false,
                    message : "No seats available or Invalid Train ID"
                  });
             } catch (error) {
                  
                   return res.status(500).json({
                     success : false,
                        message : "Internal Server Error",
                    });
                }
          } 
        }
        catch (error){
             return res.status(500).json({
                 success : false,
                 message : "Internal Server Error",
             });
        };

       
          const seatNumber = train.totalSeat - train.availabelSeat;
  try {
       const booking = await Booking.create({
           user : userId,
           train :  trainId,
           seatNumber,
           journeyDate : train.date,
     });
         return res.status(201).json({
             message : "Booking created Successfully",
             success :true,
               date : booking,

         });  


    } catch (error) {
            return res.status(500).json({
                 message : " Internal server Error",
                 success : false,
            });
    };
      
    try {
       const booking = await Booking.create({
               user : userId,
               train : trainId
       });
            return res.status(201).json({
                message : "Booking created Successfully",
                success : true,
                 data : booking,
            });   
      
    } catch (error) {
           
        return res.status(500).json({
             message : "Internal Server Error",
             success : false,
        });
    }
};
    module.exports = {
         createBooking,
    };

