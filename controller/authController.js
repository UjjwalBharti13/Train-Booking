const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


// Register User

const registerUser = async (req, res) => {
   const { name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
       
       try {
          const user = await User.create({
             name, 
             email,
             password : hashedPassword
          });
             res.status(200).json({
                   success : true,
                   message : 'User Registered Successfully',
                   user
             });   
         
       } catch (error) {
              
               res.status(500).json({
                  success : false,
                  message : 'User Registration Failed',
                  error : error.message
               });
       }
};

const loginUser = async (req,res) => {
     const { email, password} = req.body;
            
         try {
              const user = await User.findOne({email});
                 
               if(!user){
                   return res.status(400).json({
                       success: false,
                       message : 'Invalid Email or Password'
                   });
               }
               const isMAtched = await bcrypt.compare(password, user.password);
                  if(!isMAtched){
                     return res.status(400).json({
                         success : false,
                         message : 'Invalid Email or Password'
                     });
                  }
                  const token = jwt.sign(
                       {
                        userId : user._id, 
                         role : user.role
                      },process.env.JWT_SECRET,
                    {
                         expiresIn : '1d'
                    }

                  );
                   res.status(200).json({
                     success : true,
                        message : 'User Logged In Successfully',
                        token
                   })

          } catch (error) {
               
                res.status(500).json({
                     success : false,
                     message : 'User Login Failed',
                     error : error.message
                });
          }

};

   module.exports = {
        registerUser,
         loginUser
         
     }
