const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

  console.log("==== HEADERS START ====");
  console.log(req.headers);
  console.log("==== HEADERS END ====");

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'No token, authorization denied'
    });
  }

  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
};

module.exports = {
   authMiddleware,
}
