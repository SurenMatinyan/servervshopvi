const usersModel = require('../models/users.model');
const productModel = require("../models/product.model"); 

class transaction {
    static async addBasket(req, res){
        const { _id } = req.body;
        const addBasketProduct = await usersModel.updateOne({email: req.user.email}, {$push: {'products.basket': _id}});
        res.status(200).json({status: 0, message: "product added to cart"})
    }

    static async getTransaction(req, res){
        const { user } = req;
        const check = await usersModel.findOne({email: user.email}).populate({path: 'products.basket'});
        const { products } = check
        res.status(200).json(products)
    }

    static async deleteBasket(req, res){
        const { user } = req;
        const{ id } = req.params;
        const check = await usersModel.updateOne({email: user.email}, { $pull: {'products.basket': id }});
        res.status(200).json({status: 0, message: "delete"});
    }

/*

    static async buyProduct(req, res){
        try{
            const { id,  } = req.body;
            const chekInUserBalans = await usersModel.findOne({email: req.user.email});
            const chekInProductPrice = await productModel.findOne(id);
            if(chekInUserBalans.balans >= chekInProductPrice.price){
                //Buy Product
            }
            return res.status(200).json({status: 1, message: "The balance of the account is not enough"});
        }
        catch(err){
            console.error(err.message);
        }
    }

    static async addBalance(req, res){
        //add balance
    }
*/
}

module.exports =  transaction;