var signUpModel = require('../Model/userDetailsSchema');
var loginModel = require('../Model/loginCredentialsSchema')

exports.upProfile = async(req, res)=>{
    try{
        console.log('Updated Profile');

        var data = {
            username : req.query.username,
            password : req.query.password
        }
        var result = await loginModel.findOneAndUpdate({username: req.query.username}, data, {
            new:true,
            runValidators:true,
        })

        console.log(result);
        console.log('---------------------------')

        if (result)
        res.send('Updated');
        else
        res.send('Invalid details')
    }
    catch(err){
        res.send('Some error occurred', err)
    }
}