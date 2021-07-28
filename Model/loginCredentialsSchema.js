const mongoose = require ('mongoose');

mongoose.connect ('mongodb://127.0.0.1:27017/shopDB',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>console.log('DB Connection successful'))

const loginCredentialsSchema = new mongoose.Schema(
    {username: {type:String, required: true, unique: true,},
password: {type:String, required: true,},
},
{timestamps: {createdAt: true, updatedAt: true,},}
);

const loginModel= mongoose.model('LoginCred', loginCredentialsSchema)

module.exports = loginModel;