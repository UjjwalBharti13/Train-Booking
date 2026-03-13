 const bookingValidation = (req, res, next) => {
     const { trainId, seatNumber} = req.body;

        
     if(!trainId || !seatNumber){
         try {
             
              return res.status(400).json({
                 success : false,
                 message : 'Train ID and Seat Number are required',
              })
         } catch (error) {
               return res.status(500).json({
                 success : false,
                 message : 'Internal Server Error',
               });
         }
        
     }
     next();
    
 };

 module.exports = { 
    bookingValidation
 }
