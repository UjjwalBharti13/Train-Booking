const express = require('express');
const router = express.Router();

const { registerUser , loginUser } = require('../controller/authController'); 
const { authMiddleware }  = require('../middleWare/authmiddleware');



// console.log({
//   loginUser: typeof loginUser,
//   registerUser: typeof registerUser,
//   authMiddleware: typeof authMiddleware
// });
// Register Route
  
router.post('/register', registerUser);

// Login Route

router.post('/login' , loginUser);

// verify jwt

router.get('/me', authMiddleware , (req, res) => {
      res.json(req.user)
});

module.exports = router;