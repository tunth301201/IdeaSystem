const user = require('../models/User');
const { Validator } = require('node-input-validator');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const login =async (req, res)=>{
    const v = new Validator(req.body, {
		email:'required',
        password: 'required',
    });
    const matched= await v.check();
    if (!matched){
        return res.status(422).send(v.errors);
    }
    try{
    let userData=await user.findOne({email: req.body.email})
    if(userData){
       if(bcrypt.compareSync(req.body.password, userData.password)){
        let jwt_secret=process.env.JWT_SECRET||'mysecret';
        let token=jwt.sign({
            data: userData
          },jwt_secret, { expiresIn: '12h' });
          return res.status(200).send({
            massage:'Login',
            data:userData,
            token: token
        })
       }else{  
        return res.status(400).send({
        massage:'Incorect',
        data:userData,
    })

       }

    }else{
        return res.status(400).send({
            massage:'User is not Register',
            data:userData,
        })
    }
    }catch(err){
        return res.status(400).send({
            message:err.message,
            data:err
    });
    }
}
module.exports={
    login: login
  }