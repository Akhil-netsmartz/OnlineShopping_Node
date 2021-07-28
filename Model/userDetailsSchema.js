const mongoose = require ('mongoose');

mongoose.connect ('mongodb://127.0.0.1:27017/shopDB',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>console.log('DB Connection successful'))

const userDetailsSchema = new mongoose.Schema(
    {
    username: {type:String, required: true, unique: true,},
    phone: {type:Number,},
    email:{type:String,},

},
{timestamps: {createdAt: true, updatedAt: true,},}
);

const userModel= mongoose.model('USER', userDetailsSchema)

module.exports = userModel;