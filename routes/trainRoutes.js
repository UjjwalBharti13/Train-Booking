const express = require('express');
const router = express.Router();

const roleMiddleware = require('../middleWare/roleMiddleware');
const authMiddleware = require('../middleWare/authmiddleware');
const { trainValidation } = require('../middleWare/trainMiddleware');

const { addTrain, searchTrain } = require('../controller/trainController');
const { route } = require('./authRoutes');

router.post(
     '/add',
      authMiddleware,
      roleMiddleware('admin'),
      trainValidation,
      addTrain,
)

router.get('/search', searchTrain);


module.exports = router;  
   
