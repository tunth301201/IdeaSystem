const user = require('../models/User');
const { Validator } = require('node-input-validator');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');


const register =async (req, res) => {
    const v = new Validator(req.body, {
		email:'required|minLength:2|maxLength:100|unique:User,email',
		fullname:'required|minLength:2|maxLength:100',
		gender: 'required',
		image: 'required',
        password: 'required',
        department: 'required',
        permission: 'required|minLength:2|maxLength:100'
    });
    const matched= await v.check();
    if (!matched){
        return res.status(422).send(v.errors);
    }
try{
    const newUser=new user({
        email:req.body.email,
        fullname:req.body.fullname,
        gender:req.body.gender,
        image:req.body.image,
        password:req.body.password,
        department:req.body.department,
        permission:req.body.permission,
    });
    let userData= await newUser.save();
    return res.status(201).send({
        massage:'Successfull',
        data:userData,
    })
}catch(err){
    return res.status(400).send({
        message:err.message,
        data:err
});
}
}
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
    register:register,  
    login: login
  }