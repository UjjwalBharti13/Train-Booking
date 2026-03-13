const roleMiddleware = (requiredRole) => {
     return (req, res, next) =>{
        if(!req.user || req.user.role !== requiredRole){
              
            try {
                return res.status(403).json({
                     success : false,
                     message : 'Access Denied. Insufficient permissions'
                });
            } catch (error) {
                    return res.status(500).json({
                         success : false,
                         message : 'Internal Server Error',
                    });
            }
        }
           next();
     }
}

module.exports = {
      roleMiddleware
}