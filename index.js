const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


dotenv.config();
connectDB();
app.use(express.json());
const PORT= process.env.PORT;


app.use('/api/auth', authRoutes);
app.use('/api/trains',trainRoutes);
app.use('/api/booking', bookingRoutes);



app.get('/', (req, res) => {
     res.send("Welcome to Train Booking Service")
});


app.listen(PORT, () => {
     console.log(`Train Booking Service is running on port ${PORT}`);
}); 
 