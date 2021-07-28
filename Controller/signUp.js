var signUpModel = require('../Model/userDetailsSchema');
var loginModel = require('../Model/loginCredentialsSchema')

exports.addNewUser = async(req,res)=>{
    try{
        console.log("Signup")
        console.log(req.query)

        var data1 = {
            username:req.query.username,
            phone:req.query.phone,
            email:req.query.email

        }

        
        var data2 = {
            username:req.query.username,
            password:req.query.password
        }

        var newUser=await signUpModel.create(data1);
        var newCred = await loginModel.create(data2);

        console.log(data1, data2)
        console.log(newUser)
        console.log("success")
        res.send("User Registered Successfully")

    }
    catch(err){
       res.send('Error', err)
    }
}