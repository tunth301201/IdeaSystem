const jwt=require('jsonwebtoken');
const user=require('../models/User');
exports.checkper= permission=> {
	return (req, res, next)=>{
		let current_user=req.user;
		if(permission!=current_user.permission){
			return res.status(400).send({
				message:'You are not authorized',
				data:{}
		})
	}
	next();
	}
}
exports.api=(req,res,next)=>{
	var token=req.headers['authorization'];
	if(token){
		let jwt_secret=process.env.JWT_SECRET||'mysecret';
		try {
		  var decoded = jwt.verify(token, jwt_secret);
		  if(decoded){
		  	req.user=decoded.data;
		  }
		} catch(err) {
		}	
	}
	next();
}
exports.auth=(req,res,next)=>{
	var token=req.headers['authorization'];
	if(!token){
	    return res.status(401).send({
	      message:"Please login to continue"
	    })
	}else{
		// invalid token - synchronous
		let jwt_secret=process.env.JWT_SECRET||'mysecret';
		try {
		  var decoded = jwt.verify(token, jwt_secret);
		  if(decoded){
		  	req.user=decoded.data;
		  }else{
		  	  return res.status(401).send({
	           message:"Please login to continue."
	          });
		  }
		} catch(err) {
	        // err
	        if(err.expiredAt && err.expiredAt< new Date()){
	          return res.status(401).send({
	            message:"Session expired."
	          })
	        }else{
	          return res.status(401).send({
	           message:"Please login to continue."
	          })
	        }
		}
		next();
	}	
	module.exports={
	}
}