const express = require( 'express')
const User      = require( '../models/userModel')

const router = express.Router();

//sing in
router.post('/signin', async(req, res) =>{
     const singinUser = await User.findOne({
          email: req.body.email,
          password: req.body.password
     });
     if(singinUser){
          res.send({
               _id: singinUser.id,
               name: singinUser.name,
               email: singinUser.email,
               isAdmin: singinUser.isAdmin
          })
     }else {
          res.status(401).send({msg: 'Whatch out: Invalid Email or Password'});
     }
})

router.post('/signup', async(req, res) =>{

   const user =  new User(req.body)

   await user.save()

  await  res.status(200).send(user)
})

router.get("/createadmin", async (req, res) =>{
     try {
          const user = new User({
               name: 'ahmad',
               email: 'ahmad.alhabib77@gmail.com',
               password: '1234',
               isAdmin: true
          });
     
          const newUser = await user.save();
          res.send(newUser);
     } catch (error) {
          res.send({msg: error.message})
     }
     
} )

module.exports = router;