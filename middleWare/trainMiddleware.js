const trainValidation = (req, res, next) => {
    const { name, source, destination, date, seat} = req.body;
    
     if(!name || !source || !destination || !date || !seat){
            try {
                return res.status(400).json({
                     success : false,
                     message : 'All fields are required'
                });
            } catch (error) {
                return res.status(500).json({
                     success : false,
                     message : 'Internal Server Error',
                });
            }
        }
            if(source === destination){
                 try {
                    return res.status(400).json({
                         success : false,
                         message : 'Source and Destination cannot be the same',
                    });
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
     trainValidation
}