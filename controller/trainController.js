const Train = require('../model/train');
const Seat = require('../model/seat');

const searchTrain = async (req , res) => {
     const { from , to , date } = req.query;
       
     try {
        const trains = await Train.find({
         
             source : from,
             destination : to,
             date : date
        });

        
        res.status(200).json(trains);
     } catch (error) {
           
        res.status(500).json({
              success: false,
                message : "Error searching trains",
        })
     }

};

const searchSeat = async (req, res) => {
    const {trainId, journeyDate} = req.body;
      
    try {
      const seats = await Seat.find({
          trainId : trainId,
          journeyDate : journeyDate,
           isBooked : false
      });
          
      res.status(200).json(seats);

    } catch (error) {
          res.status(500).json({
              success : false,
           message : "Error searching seats",     

          });
    }
};

const addTrain = async (req, res) => {
    const { name, source, destination, date, type, totalSeat } = req.body;
      
    const train = await Train.create({
         name,
         source,
         destination,
         date,
         type,
         totalSeat,
         availabelSeat : totalSeats
    });
     
       try {
          res.status(201).json({
             success : true,
             message : "Train added successfully",
             train
          });
       } catch (error) {
              res.status(500).json({
               success : false,
               message : "Error adding train",
               error : error.message
              });
       }
};

module.exports = {
   searchTrain,
   searchSeat,
   addTrain
};           
