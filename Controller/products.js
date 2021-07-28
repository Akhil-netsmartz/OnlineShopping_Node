const productModel =require ("../Model/productSchema");
exports.getProductsWithDeals =async (req,res) =>{

    try {
        console.log('Today Deals: Below products are available at 10% discounted rate');

        var result = await productModel.find({TodayDeals:1});
        console.log(result);

        if(result.length>0)
        res.send(result)
        else
        res.send('No deals for today. All the products are present at good price. Please shop.')
          
    }
    catch(err){
        res.send('Some error occurred', err)
    }
}

exports.getProducts =async(req,res)=>{
    try{
        console.log('Products');
        var result= await productModel.find({});

        if (result.length > 0){
            res.send(result);

        }
        else{
            res.send('No products to show as of now');
        }
    }
    catch(err){
        res.send('Some error occurred',err);    }
}
exports.getProductDetails = async(req,res)=>{

    try{
        console.log(req.params.prodId);
        var result= await productModel.find({_id: req.params.prodId});
        console.log(result);
        if (result.length > 0){
            res.send(result);

        }
        else{
            res.send('No products to show as of now');
        }
    }
    catch(err){
        res.send('Some error occurred',err);    
}
}

exports.getSearchProduct = async(req,res)=>{

    try{
        console.log(req.query.name);
        var result= await productModel.find({name: req.query.name});
        console.log(result);
        if (result.length > 0){
            res.send(result);

        }
        else{
            res.send('No products to show as of now');
        }
    }
    catch(err){
        res.send('Some error occurred',err);    
}
}