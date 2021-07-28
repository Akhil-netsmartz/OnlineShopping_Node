var loginModel = require('../Model/loginCredentialsSchema');

exports.postLoginDetails  = async(req, res)=>{
    try{
        console.log('Login')
        console.log(req.query)
        username = req.query.username;
        password = req.query.password;
        var result = await loginModel.find({$and:[{username:req.query.username}, {password:req.query.password}]},{__id:0})
        console.log(result)
        console.log('---------------------------------------')
        if(result.length > 0)
         res.send('Valid credentials')
         else{
             res.send('Invalid username or password')
         }
    }
    catch(err){
        res.send('Some error occurred', err)
    }
}