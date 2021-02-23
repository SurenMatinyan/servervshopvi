const productModel = require("../models/product.model");
const jwt = require('jsonwebtoken');



class product {
    static async getProduct(req, res){
       const { page }  = req.query;
       let skip = 1;
       page == 1 ? skip = 0 : skip = (5 * page) - 5;
       const getProduct = await productModel.find().skip(skip).limit(5);
       res.json(getProduct);
    }



    static async createProduct(req, res){
       if(req.body.category){
        const newPorduct = await productModel.create(req.body);
        
        console.log(newPorduct);
        return res.json({message: "create new product"});

       }
       // const newProduct = await productModel.create(req.body);
    }

}


 


module.exports = product;