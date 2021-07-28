const mongoose = require ('mongoose');

mongoose.connect ('mongodb://127.0.0.1:27017/shopDB',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>console.log('DB Connection successful'))

const productSchema = new mongoose.Schema({
  name:{type:String, required:true, unique:true,},
  ShortDescription:{type:String,},
  Description: {type:String,},
  OfferPrice: {type:Number,},
  DeliveryCharge:{type:Number,},
  TodayDeals:{type:Number,},
  Discount:{type:Number,},
},
{timestamps:{createdAt:true, updatedAt:true,},}
);

const productModel = mongoose.model('PRODUCT', productSchema);

module.exports = productModel;