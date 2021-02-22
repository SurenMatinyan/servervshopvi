const productModel = require("../models/product.model");
const jwt = require('jsonwebtoken');



class product {
    static async getProduct(req, res){
        //tox beri padkategoryaner@ 
    }


    static async createProduct(req, res){
       if(req.body.category){
        const newPorduct = await productModel.create(req.body);
        
        console.log(newPorduct);
        return res.json({message: "create new product"});

       }
       // const newProduct = await productModel.create(req.body);
    }


    static async updateProduct(req, res){
         await productModel(req.body);
    }
}


 


module.exports = product;